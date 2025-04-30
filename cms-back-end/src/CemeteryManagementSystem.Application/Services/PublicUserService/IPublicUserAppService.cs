using System;
using Abp.Application.Services;
using CemeteryManagementSystem.Services.PublicUserService.Dto;

namespace CemeteryManagementSystem.Services.PublicUserService
{
    public interface IPublicUserAppService : IAsyncCrudAppService<PublicUserDto, Guid>
    {
    }
}
