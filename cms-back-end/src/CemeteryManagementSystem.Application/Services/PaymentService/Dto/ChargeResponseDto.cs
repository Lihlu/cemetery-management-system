using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CemeteryManagementSystem.Services.PaymentService.Dto
{
    public class ChargeResponseDto
    {
        public string Id { get; set; }
        public string Status { get; set; }
        public int AmountInCents { get; set; }
        public string Currency { get; set; }
    }
}
