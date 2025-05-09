namespace CemeteryManagementSystem.PaymentService.Dto
{
    public class YocoCheckoutRequest
    {
        public decimal Amount { get; set; }
        public string Currency { get; set; }
        public string SuccessUrl { get; set; }
        public string CancelUrl { get; set; }
        public string FailureUrl { get; set; }
    }
}