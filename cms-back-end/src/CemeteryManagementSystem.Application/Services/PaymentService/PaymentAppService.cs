using System;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Domain.Repositories;
using CemeteryManagementSystem.Domain.PassengerManagement;
using CemeteryManagementSystem.PaymentService;
using CemeteryManagementSystem.PaymentService.Dto;
using CemeteryManagementSystem.Services.PaymentManagement.PaymentAppService;
using CemeteryManagementSystem.Services.PaymentManagement.PaymentAppService.DTO;
using CemeteryManagementSystem.Services.PaymentService.Dto;

namespace CemeteryManagementSystem.Services.PaymentAppService
{
    public class PaymentAppService : AsyncCrudAppService<Payment, PaymentDto, Guid>, IPaymentAppService
    {
        private readonly IPaymentService _paymentService;

        public PaymentAppService(IRepository<Payment, Guid> repository, IPaymentService paymentService) : base(repository)
        {
            _paymentService = paymentService;
        }


        public async Task<YocoCheckoutResponse> CreateYocoCheckoutAsync(YocoCheckoutRequest input, Guid driverId)
        {
            var referenceId = _paymentService.GenerateReferenceId();
            var response = await _paymentService.CreateYocoCheckoutAsync(input, referenceId);

            var payment = new Payment
            {
                Id = Guid.NewGuid(),
                Amount = input.Amount,
                PaymentDate = DateTime.UtcNow,
                TransactionReference = referenceId.ToString(),
                GatewayResponseCode = "200",
                GatewayTransactionId = response.CheckoutId,
                Status = "Initiated"
            };

            await Repository.InsertAsync(payment);

            return response;
        }

        public string TestConnection()
        {
            return "Service is up";
        }
    }
}