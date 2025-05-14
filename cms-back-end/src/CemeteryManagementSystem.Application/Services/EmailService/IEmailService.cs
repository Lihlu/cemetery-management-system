using System.Threading.Tasks;
using Abp.Dependency;
using CemeteryManagementSystem.Services.EmailService.Dto;

namespace CemeteryManagementSystem.Services.EmailService
{
    public interface IEmailService : ITransientDependency
    {
        Task SendEmailAsync(EmailRequestDto request);
    }
}
