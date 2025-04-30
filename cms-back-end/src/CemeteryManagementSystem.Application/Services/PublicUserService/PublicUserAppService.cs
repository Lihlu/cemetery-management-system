using System;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Authorization;
using Abp.Domain.Repositories;
using CemeteryManagementSystem.Domain.PublicUser;
using CemeteryManagementSystem.Services.PublicUserService.Dto;

namespace CemeteryManagementSystem.Services.PublicUserService
{
    [AbpAuthorize]
    public class PublicUserAppService : AsyncCrudAppService<PublicUser, PublicUserDto, Guid>, IPublicUserAppService
    {
        private readonly PublicUserManager _publicUserManager;
        public PublicUserAppService(IRepository<PublicUser, Guid> repository, PublicUserManager publicUserManager) : base(repository)
        {
            _publicUserManager = publicUserManager;
        }
        [AbpAllowAnonymous]
        public override async Task<PublicUserDto> CreateAsync(PublicUserDto input)
        {
            PublicUser publicUser = await _publicUserManager.CreatePublicUserAsync(input.Username, input.Name, input.Surname, input.Email, input.Password, input.ContactNumber, input.NationalIdNumber);
            return ObjectMapper.Map<PublicUserDto>(publicUser);
        }

        public async Task<UpdatePublicUserAddressDto> UpdatePublicUserAddressAsync(UpdatePublicUserAddressDto input)
        {
            Address address = await _publicUserManager.UpdateAddressAsync(input.PublicUserId, input.StreetNumber, input.StreetName, input.ComplexOrEstateAddress, input.City, input.Province, input.PostalCode);
            return ObjectMapper.Map<UpdatePublicUserAddressDto>(address);
        }
    }
}
