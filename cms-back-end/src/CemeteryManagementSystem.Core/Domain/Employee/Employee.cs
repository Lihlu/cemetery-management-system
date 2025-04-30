using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abp.Domain.Entities.Auditing;
using CemeteryManagementSystem.Authorization.Users;

namespace CemeteryManagementSystem.Domain.Employee
{
    public class Employee : FullAuditedEntity<Guid>
    {
        public string EmployeeNumber { get; set; }
        public string Section { get; set; }
        public long UserId { get; set; }
        [ForeignKey(nameof(UserId))]
        public User User { get; set; }

    }
}
