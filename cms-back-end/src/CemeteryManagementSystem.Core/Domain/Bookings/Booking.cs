using System;
using System.ComponentModel.DataAnnotations;
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
        public Guid GraveSiteId { get; set; }
        [ForeignKey(nameof(GraveSiteId))]
        public GraveSite.GraveSite? GraveSite { get; set; }
        public DateTime ServiceDateTime { get; set; }
        [Required]
        public ReflistBookingType BookingType { get; set; }
        [Required]
        public ReflistBookingStatus BookingStatus { get; set; }
        public string? SpecialRequest { get; set; }

    }
}
