using System;
using System.Threading.Tasks;
using Abp.Domain.Repositories;
using Abp.Domain.Services;
using Abp.UI;
using CemeteryManagementSystem.Authorization.Users;

namespace CemeteryManagementSystem.Domain.PublicUser
{
    public class PublicUserManager : DomainService
    {
        private readonly UserManager _userManager;
        IRepository<PublicUser, Guid> _publicUserRepository;
        IRepository<Address, Guid> _addressRepository;
        public PublicUserManager(UserManager userManager, IRepository<PublicUser, Guid> publicUserRepository, IRepository<Address, Guid> addressRepository)
        {
            _userManager = userManager;
            _publicUserRepository = publicUserRepository;
            _addressRepository = addressRepository;
        }

        public async Task<PublicUser> CreatePublicUserAsync(string username, string firstName, string surname, string emailAddress, string password, string contactNumber, string nationalIdNumber)
        {
            // Check if the username is already taken
            var existingUser = await _userManager.FindByNameAsync(username);
            if (existingUser != null)
            {
                throw new UserFriendlyException($"Username '{username}' is already taken.");
            }

            // Check if the email is already used
            var existingEmailUser = await _userManager.FindByEmailAsync(emailAddress);
            if (existingEmailUser != null)
            {
                throw new UserFriendlyException($"Email '{emailAddress}' is already in use.");
            }

            // Check if Id Number is already used
            var existingIdNumberUser = await _publicUserRepository.FirstOrDefaultAsync(u => u.NationalIdNumber == nationalIdNumber);
            if (existingIdNumberUser != null)
            {
                throw new UserFriendlyException("ID number is already used by an existing account");
            }

            var user = new User
            {
                Name = firstName,
                Surname = surname,
                EmailAddress = emailAddress,
                UserName = username,
            };

            var userCreationResult = await _userManager.CreateAsync(user, password);
            if (!userCreationResult.Succeeded)
            {
                throw new UserFriendlyException("User creation failed");
            }

            await _userManager.AddToRoleAsync(user, "publicuser");

            PublicUser publicUserInput = new PublicUser
            {
                ContactNumber = contactNumber,
                NationalIdNumber = nationalIdNumber,
                User = user,
            };

            PublicUser publicUser = await _publicUserRepository.InsertAsync(publicUserInput);

            Address address = new Address { PublicUserId = publicUserInput.Id };
            await _addressRepository.InsertAsync(address);

            return publicUser;
        }

        public async Task<Address> UpdateAddressAsync(Guid publicUserId, int streetNumber, string streetName, string complexOrEstateAddress, string city, string province, string postalCode)
        {
            var existingAddress = await _addressRepository.FirstOrDefaultAsync(a => a.PublicUserId == publicUserId);
            if (existingAddress == null)
            {
                throw new UserFriendlyException("User's address not found");
            }

            existingAddress.StreetNumber = streetNumber;
            existingAddress.StreetName = streetName;
            existingAddress.ComplexOrEstateAddress = complexOrEstateAddress;
            existingAddress.City = city;
            existingAddress.Province = province;
            existingAddress.PostalCode = postalCode;

            var updatedAddress = await _addressRepository.UpdateAsync(existingAddress);

            return updatedAddress;
        }
    }
}
