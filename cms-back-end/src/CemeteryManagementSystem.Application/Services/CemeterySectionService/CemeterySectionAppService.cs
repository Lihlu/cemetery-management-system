using System;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Authorization;
using Abp.Domain.Repositories;
using CemeteryManagementSystem.Domain.CemeterySection;
using CemeteryManagementSystem.Services.CemeterySectionService.Dto;

namespace CemeteryManagementSystem.Services.CemeterySectionService
{
    [AbpAuthorize]
    public class CemeterySectionAppService : AsyncCrudAppService<CemeterySection, CemeterySectionDto, Guid>, ICemeterySectionAppService
    {
        public CemeterySectionAppService(IRepository<CemeterySection, Guid> repository)
            : base(repository)
        {
        }
    }
}
