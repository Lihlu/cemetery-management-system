using System;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Domain.Entities.Auditing;
using CemeteryManagementSystem.Authorization.Users;

namespace CemeteryManagementSystem.Domain.Bookings
{
    public class Booking : FullAuditedEntity<Guid>
    {
        public long BookerId { get; set; }
        [ForeignKey(nameof(BookerId))]
        public User Booker { get; set; }
        public Guid DeceasedPersonId { get; set; }
        [ForeignKey(nameof(DeceasedPersonId))]
        public DeceasedPerson.DeceasedPerson DeceasedPerson { get; set; }
        public DateTime DateAndTimeOfFuneral { get; set; }
        public string SpecialRequest { get; set; }

    }
}
