using System;
using Abp.Domain.Entities.Auditing;

namespace CemeteryManagementSystem.Domain.DeceasedPerson
{
    public class DeceasedPerson : FullAuditedEntity<Guid>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string IdNumber { get; set; }
        public DateTime DateOfBirth { get; set; }
        public DateTime DateOfDeath { get; set; }
        public DateTime DateOfFuneral { get; set; }
        public string GraveNumber { get; set; }
        public string Section { get; set; }
        public bool isBuried { get; set; }
    }
}
