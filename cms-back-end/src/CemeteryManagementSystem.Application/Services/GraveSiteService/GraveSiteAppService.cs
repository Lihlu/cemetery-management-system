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
        private readonly GravesiteManager _gravesiteManager;
        public GraveSiteAppService(IRepository<GraveSite, Guid> repository, GravesiteManager gravesiteManager)
            : base(repository)
        {
            _gravesiteManager = gravesiteManager;
        }

        public async Task<List<GraveSiteDto>> GetByOwnerIdAsync(long ownerId)
        {
            var gravesites = await _gravesiteManager.GetGraveSitesByOwnerId(ownerId);

            return ObjectMapper.Map<List<GraveSiteDto>>(gravesites);
        }

    }
}
