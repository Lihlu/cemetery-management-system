using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.UI;
using CemeteryManagementSystem.Services.PaymentService.Dto;
using Microsoft.Extensions.Configuration;

namespace CemeteryManagementSystem.Services.PaymentService
{
    public class PaymentAppService : ApplicationService
    {
        private readonly IHttpClientFactory _httpClientFactory;
        private readonly IConfiguration _configuration;

        public PaymentAppService(IHttpClientFactory httpClientFactory, IConfiguration configuration)
        {
            _httpClientFactory = httpClientFactory;
            _configuration = configuration;
        }

        public async Task<ChargeResponseDto> ChargeAsync(string token, int amount)
        {
            var client = _httpClientFactory.CreateClient();
            client.DefaultRequestHeaders.Add("Authorization", $"Bearer {_configuration["Yoco:SecretKey"]}");

            var requestBody = new
            {
                token = token,
                amount = amount,
                currency = "ZAR"
            };

            var content = new StringContent(JsonSerializer.Serialize(requestBody), Encoding.UTF8, "application/json");

            var response = await client.PostAsync("https://payments.yoco.com/api/checkouts/", content);
            var responseString = await response.Content.ReadAsStringAsync();

            if (!response.IsSuccessStatusCode)
            {
                var errorMessage = $"Payment failed: {response.StatusCode}. Details: {responseString}";
                throw new UserFriendlyException(errorMessage);
            }

            var options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
            var result = JsonSerializer.Deserialize<ChargeResponseDto>(responseString, options);

            if (result == null)
            {
                throw new UserFriendlyException("Invalid response from payment gateway.");
            }

            return result;
        }

    }
}
