using System;
using Abp.Application.Services;
using Abp.Domain.Repositories;
using CemeteryManagementSystem.Domain.PublicUser;
using CemeteryManagementSystem.Services.PublicUserService.Dto;

namespace CemeteryManagementSystem.Services.PublicUserService
{
    public class PublicUserAppService : AsyncCrudAppService<PublicUser, PublicUserDto, Guid>, IPublicUserAppService
    {
        public PublicUserAppService(IRepository<PublicUser, Guid> repository) : base(repository)
        {
        }
    }
}
