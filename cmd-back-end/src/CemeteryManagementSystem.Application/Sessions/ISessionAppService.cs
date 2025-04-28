using Abp.Application.Services;
using CemeteryManagementSystem.Sessions.Dto;
using System.Threading.Tasks;

namespace CemeteryManagementSystem.Sessions;

public interface ISessionAppService : IApplicationService
{
    Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
}
