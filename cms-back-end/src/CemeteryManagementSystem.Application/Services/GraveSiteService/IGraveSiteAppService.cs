using System;
using Abp.Application.Services;
using CemeteryManagementSystem.Services.GraveSiteService.Dto;

namespace CemeteryManagementSystem.Services.GraveSiteService
{
    public interface IGraveSiteAppService : IAsyncCrudAppService<GraveSiteDto, Guid>
    {
    }
}
