using System;
using System.Threading.Tasks;
using CemeteryManagementSystem.PaymentService.Dto;
using CemeteryManagementSystem.Services.PaymentService.Dto;

namespace CemeteryManagementSystem.PaymentService
{
    public interface IPaymentService
    {
        Task<YocoCheckoutResponse> CreateYocoCheckoutAsync(YocoCheckoutRequest request, Guid referenceId);
        Guid GenerateReferenceId();
    }
}