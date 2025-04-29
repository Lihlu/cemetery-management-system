using System;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Domain.Entities.Auditing;
using CemeteryManagementSystem.Authorization.Users;

namespace CemeteryManagementSystem.Domain.PublicUser
{
    public class PublicUser : FullAuditedEntity<Guid>
    {
        public string ContactNumber { get; set; }
        public string NationalIdNumber { get; set; }
        public long UserId { get; set; }
        [ForeignKey(nameof(UserId))]
        public User User { get; set; }
        public Address Address { get; set; }
    }
}
