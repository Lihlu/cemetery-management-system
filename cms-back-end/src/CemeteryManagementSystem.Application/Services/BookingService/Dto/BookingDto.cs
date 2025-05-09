using System;
using Abp.Application.Services.Dto;
using System.ComponentModel.DataAnnotations;
using Abp.AutoMapper;
using CemeteryManagementSystem.Domain.Bookings;
using CemeteryManagementSystem.Domain.DeceasedPerson;

namespace CemeteryManagementSystem.Services.BookingService.Dto
{
    [AutoMap(typeof(Booking))]
    public class BookingDto : EntityDto<Guid>
    {
        [Required]
        public long BookerId { get; set; }

        [Required]
        public Guid DeceasedPersonId { get; set; }

        [Required]
        public DateTime DateAndTimeOfFuneral { get; set; }

        public DeceasedPerson DeceasedPerson { get; set; }
        public string SpecialRequest { get; set; }
    }
}