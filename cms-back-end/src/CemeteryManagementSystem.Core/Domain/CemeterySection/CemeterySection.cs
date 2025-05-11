using System;
using System.Collections.Generic;
using Abp.Domain.Entities.Auditing;

namespace CemeteryManagementSystem.Domain.CemeterySection
{
    public class CemeterySection : FullAuditedEntity<Guid>
    {
        public string Name { get; set; }
        public string Type { get; set; }
        public int NumberOfRows { get; set; }
        public int TotalCapacity { get; set; }
        public int NumberOfAvailableSites { get; set; }
        public List<int> sitesPerRow { get; set; }
    }
}
