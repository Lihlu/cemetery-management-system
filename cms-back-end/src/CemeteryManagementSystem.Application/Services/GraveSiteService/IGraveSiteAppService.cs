using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Abp.Application.Services;
using CemeteryManagementSystem.Services.GraveSiteService.Dto;

namespace CemeteryManagementSystem.Services.GraveSiteService
{
    public interface IGraveSiteAppService : IAsyncCrudAppService<GraveSiteDto, Guid>
    {
        public Task<IEnumerable<GraveSiteDto>> GetByCemeterySectionIdAsync(Guid cemeterySectionId);
    }
}
