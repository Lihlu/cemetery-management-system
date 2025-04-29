using System;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Domain.Entities.Auditing;

namespace CemeteryManagementSystem.Domain.PublicUser
{
    public class Address : FullAuditedEntity<Guid>
    {

        public Guid PublicUserId { get; set; }
        [ForeignKey(nameof(PublicUserId))]
        public PublicUser PublicUser { get; set; }
        public int StreetNumber { get; set; }
        public string StreetName { get; set; }
        public string ComplexOrEstateAddress { get; set; }
        public string City { get; set; }
        public string Province { get; set; }
        public string PostalCode { get; set; }
    }
}
