using System;

namespace CemeteryManagementSystem.Services.EmailService.Dto
{
    public class SendEmailResultDto
    {
        public bool Success { get; set; }
        public string Message { get; set; }
        public string SentTo { get; set; }
        public DateTime? SentDate { get; set; }
        public int? AttachmentSize { get; set; }
        public string AttachmentName { get; set; }
    }
}
