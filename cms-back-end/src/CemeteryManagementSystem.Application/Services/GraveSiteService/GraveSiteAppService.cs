using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Authorization;
using Abp.Domain.Repositories;
using CemeteryManagementSystem.Domain.GraveSite;
using CemeteryManagementSystem.Services.GraveSiteService.Dto;

namespace CemeteryManagementSystem.Services.GraveSiteService
{
    [AbpAuthorize]
    public class GraveSiteAppService : AsyncCrudAppService<GraveSite, GraveSiteDto, Guid>, IGraveSiteAppService
    {
        private readonly GraveSiteManager _graveSiteManager;
        public GraveSiteAppService(IRepository<GraveSite, Guid> repository, GraveSiteManager graveSiteManager)
            : base(repository)
        {
            _graveSiteManager = graveSiteManager;
        }

        public async Task<IEnumerable<GraveSiteDto>> GetByCemeterySectionIdAsync(Guid cemeterySectionId)
        {
            var graveSites = await _graveSiteManager.GetByCemeterySectionIdAsync(cemeterySectionId);

            return ObjectMapper.Map<IEnumerable<GraveSiteDto>>(graveSites);
        }
    }
}