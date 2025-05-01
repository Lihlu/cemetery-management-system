using System;
using Abp.Application.Services;
using CemeteryManagementSystem.Services.DeceasedPersonService.Dto;

namespace CemeteryManagementSystem.Services.DeceasedPersonService
{
    public interface IDeceasedPersonAppService : IAsyncCrudAppService<DeceasedPersonDto, Guid>
    {
    }
}
