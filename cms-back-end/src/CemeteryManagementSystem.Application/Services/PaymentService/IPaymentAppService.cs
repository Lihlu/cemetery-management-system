using System;
using System.Threading.Tasks;
using Abp.Application.Services;
using CemeteryManagementSystem.PaymentService.Dto;
using CemeteryManagementSystem.Services.PaymentManagement.PaymentAppService.DTO;
using CemeteryManagementSystem.Services.PaymentService.Dto;

namespace CemeteryManagementSystem.Services.PaymentManagement.PaymentAppService
{
    public interface IPaymentAppService : IAsyncCrudAppService<PaymentDto, Guid>
    {
        Task<YocoCheckoutResponse> CreateYocoCheckoutAsync(YocoCheckoutRequest input, Guid driverId);
    }
}