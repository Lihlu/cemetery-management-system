using System;
using Abp.AutoMapper;
using CemeteryManagementSystem.Domain.PublicUser;

namespace CemeteryManagementSystem.Services.PublicUserService.Dto
{
    [AutoMap(typeof(Address))]
    public class UpdatePublicUserAddressDto
    {
        public Guid PublicUserId { get; set; }
        public int StreetNumber { get; set; }
        public string StreetName { get; set; }
        public string ComplexOrEstateAddress { get; set; }
        public string City { get; set; }
        public string Province { get; set; }
        public string PostalCode { get; set; }
    }
}
