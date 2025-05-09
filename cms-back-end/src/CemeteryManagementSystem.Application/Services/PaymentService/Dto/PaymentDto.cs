using System;
using System.ComponentModel.DataAnnotations;
using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using CemeteryManagementSystem.Domain.PassengerManagement;

namespace CemeteryManagementSystem.Services.PaymentManagement.PaymentAppService.DTO
{
    [AutoMap(typeof(Payment))]

    public class PaymentDto : EntityDto<Guid>
    {

        [Required]
        public decimal Amount { get; set; }
        public DateTime PaymentDate { get; set; }
        [Required]
        public string TransactionReference { get; set; }
        [Required]
        public string GatewayResponseCode { get; set; }
        public string GatewayTransactionId { get; set; }
        [Required]
        public string Status { get; set; }
        public Guid? PayoutId { get; set; }
    }
}