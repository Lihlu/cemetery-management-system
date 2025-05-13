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
        public Guid DeceasedPersonId { get; set; }
        public DateTime DateAndTimeOfFuneral { get; set; }
        public string SpecialRequest { get; set; }
        public string BookerName { get; set; }
        public string DeceasedPersonName { get; set; }

    }
}
