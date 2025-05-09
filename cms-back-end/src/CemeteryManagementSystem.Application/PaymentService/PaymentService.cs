using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using Abp.Dependency;
using Abp.Domain.Services;
using CemeteryManagementSystem.Configuration;
using CemeteryManagementSystem.PaymentService;
using CemeteryManagementSystem.PaymentService.Dto;
using CemeteryManagementSystem.Services.PaymentService.Dto;
using Microsoft.Extensions.Logging;

namespace CemeteryManagementSystem.Services.PaymentService
{
    public class PaymentService : DomainService, IPaymentService, ITransientDependency
    {
        private readonly IHttpClientFactory _clientFactory;
        private readonly ILogger _logger;
        private readonly PaymentConfiguration _paymentConfig;

        public PaymentService(
         IHttpClientFactory clientFactory,
         ILoggerFactory loggerFactory,
         PaymentConfiguration paymentConfig)
        {
            _clientFactory = clientFactory;
            _logger = loggerFactory.CreateLogger<PaymentService>();
            _paymentConfig = paymentConfig;
        }

        public async Task<YocoCheckoutResponse> CreateYocoCheckoutAsync(YocoCheckoutRequest request, Guid referenceId)
        {
            try
            {
                string url = "https://payments.yoco.com/api/checkouts";

                // Convert amount to cents as required by Yoco
                var requestBody = new
                {
                    amount = Convert.ToInt32(request.Amount * 100),
                    currency = string.IsNullOrEmpty(request.Currency) ? "ZAR" : request.Currency,
                    successUrl = $"{request.SuccessUrl}?guid={referenceId}",
                    cancelUrl = request.CancelUrl,
                    failureUrl = request.FailureUrl
                };

                var json = JsonSerializer.Serialize(requestBody);
                var content = new StringContent(json, Encoding.UTF8, "application/json");

                var client = _clientFactory.CreateClient("YocoClient");
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", _paymentConfig.YocoSecretKey);

                var response = await client.PostAsync(url, content);

                if (response.IsSuccessStatusCode)
                {
                    var responseContent = await response.Content.ReadAsStringAsync();
                    var responseJson = JsonSerializer.Deserialize<JsonElement>(responseContent);

                    return new YocoCheckoutResponse
                    {
                        CheckoutUrl = responseJson.GetProperty("redirectUrl").GetString(),
                        CheckoutId = responseJson.GetProperty("id").GetString()
                    };
                }
                else
                {
                    var errorContent = await response.Content.ReadAsStringAsync();
                    _logger.LogError("Yoco API Error: {StatusCode}, {Response}", response.StatusCode, errorContent);
                    throw new PaymentException($"Yoco checkout creation failed: {response.StatusCode}");
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error creating Yoco checkout: {Message}", ex.Message);
                throw new PaymentException("Failed to create Yoco checkout", ex);
            }
        }

        public Guid GenerateReferenceId()
        {
            return Guid.NewGuid();
        }

        public class PaymentException : Exception
        {
            public PaymentException(string message) : base(message)
            {
            }

            public PaymentException(string message, Exception innerException) : base(message, innerException)
            {
            }
        }
    }
}