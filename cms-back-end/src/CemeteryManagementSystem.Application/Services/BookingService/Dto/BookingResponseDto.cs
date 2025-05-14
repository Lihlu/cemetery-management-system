using System;
using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using CemeteryManagementSystem.Domain.Bookings;

namespace CemeteryManagementSystem.Services.BookingService.Dto
{
    [AutoMap(typeof(Booking))]
    public class BookingResponseDto : EntityDto<Guid>
    {
        public long BookerId { get; set; }
        public string BookerName { get; set; }
        public string BookerEmail { get; set; }

        public Guid DeceasedPersonId { get; set; }
        public string DeceasedPersonName { get; set; }

        public Guid GraveSiteId { get; set; }
        public string GraveSiteNumber { get; set; }

        public DateTime DateAndTimeOfService { get; set; }

        public ReflistBookingType BookingType { get; set; }
        public ReflistBookingStatus BookingStatus { get; set; }

        public string? SpecialRequest { get; set; }
    }
}
