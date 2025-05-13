using System;
using Abp.Domain.Entities.Auditing;

namespace CemeteryManagementSystem.Domain.GraveSite
{
    public class GraveSite : FullAuditedEntity<Guid>
    {
        public Guid CemeterySectionId { get; set; }
        public string SiteNumber { get; set; }
        public bool IsExtraDeep { get; set; }
        public string GraveType { get; set; }
        public int Row { get; set; }
        public int Column { get; set; }
        public string Occupant1IdNumber { get; set; }
        public string Occupant2IdNumber { get; set; }
        public bool IsReserved { get; set; }
        public long OwnerId { get; set; }
    }
}
