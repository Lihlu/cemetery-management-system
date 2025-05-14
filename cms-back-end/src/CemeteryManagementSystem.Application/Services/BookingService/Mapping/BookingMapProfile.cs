using AutoMapper;

namespace CemeteryManagementSystem.Services.BookingService.Mapping
{
    public class BookingMapProfile : Profile
    {
        public BookingMapProfile()
        {
            CreateMap<Domain.Bookings.Booking, Dto.BookingResponseDto>()
                .ForMember(dest => dest.BookerName,
                           opt => opt.MapFrom(src => src.Booker.Name))
                .ForMember(dest => dest.DeceasedPersonName,
                           opt => opt.MapFrom(src => $"{src.DeceasedPerson.FirstName} {src.DeceasedPerson.LastName}"))
                .ForMember(dest => dest.GraveSiteNumber,
                           opt => opt.MapFrom(src => src.GraveSite.SiteNumber))
                .ForMember(dest => dest.BookerEmail,
                           opt => opt.MapFrom(src => src.Booker.EmailAddress));
        }
    }
}
