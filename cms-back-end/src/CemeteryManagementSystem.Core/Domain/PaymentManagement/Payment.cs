using System;
using System.ComponentModel.DataAnnotations;
using Abp.Domain.Entities.Auditing;


namespace CemeteryManagementSystem.Domain.PassengerManagement
{
    public class Payment : FullAuditedEntity<Guid>
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
    }
}