using System;
using Abp.Application.Services;
using CemeteryManagementSystem.Services.CemeterySectionService.Dto;

namespace CemeteryManagementSystem.Services.CemeterySectionService
{
    public interface ICemeterySectionAppService : IAsyncCrudAppService<CemeterySectionDto, Guid>
    {
    }
}
