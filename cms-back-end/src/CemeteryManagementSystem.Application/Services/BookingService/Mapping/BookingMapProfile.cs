using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;

namespace CemeteryManagementSystem.Services.BookingService.Mapping
{
    public class BookingMapProfile : Profile
    {
        public BookingMapProfile()
        {
            CreateMap<Domain.Bookings.Booking, Dto.BookingResponseDto>()
                .ForMember(dest => dest.BookerName, opt => opt.MapFrom(src => src.Booker.Name))
                .ForMember(dest => dest.DeceasedPersonName, opt => opt.MapFrom(src => src.DeceasedPerson.FirstName));
        }

    }
}
