using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Authorization;
using Abp.Domain.Repositories;
using CemeteryManagementSystem.Domain.Bookings;
using CemeteryManagementSystem.Services.BookingService.Dto;

namespace CemeteryManagementSystem.Services.BookingService
{
    [AbpAuthorize]
    public class BookingAppService : AsyncCrudAppService<Booking, BookingDto, Guid>, IBookingAppService
    {
        BookingManager _bookingManager;
        public BookingAppService(IRepository<Booking, Guid> repository, BookingManager bookingManager)
            : base(repository)
        {
            _bookingManager = bookingManager;
        }

        public async Task<List<BookingDto>> GetByUserId(long userId)
        {
            var bookings = await _bookingManager.GetBookingsByUserId(userId);

            var result = ObjectMapper.Map<List<BookingDto>>(bookings);

            return result;
        }
    }
}