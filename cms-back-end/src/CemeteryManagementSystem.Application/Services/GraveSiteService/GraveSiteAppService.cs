using System;
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
        public GraveSiteAppService(IRepository<GraveSite, Guid> repository)
            : base(repository)
        {
        }
    }
}
