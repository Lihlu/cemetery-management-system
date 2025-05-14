namespace CemeteryManagementSystem.Services.EmailService.Dto
{
    public class EmailAttachmentDto
    {
        public string FileName { get; set; }
        public byte[] FileBytes { get; set; }
        public string ContentType { get; set; }
    }
}
