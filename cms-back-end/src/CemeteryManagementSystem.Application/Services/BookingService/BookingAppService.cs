using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using CemeteryManagementSystem.Domain.Bookings;
using CemeteryManagementSystem.Services.BookingService.Dto;

namespace CemeteryManagementSystem.Services.BookingService
{
    [AbpAuthorize]
    public class BookingAppService : AsyncCrudAppService<Booking, BookingDto, Guid>, IBookingAppService
    {
        private readonly BookingManager _bookingManager;
        public BookingAppService(IRepository<Booking, Guid> repository, BookingManager bookingManager)
            : base(repository)
        {
            _bookingManager = bookingManager;
        }

        public async Task<PagedResultDto<BookingResponseDto>> GetAllBookingsAsync(PagedAndSortedResultRequestDto input)
        {
            var bookings = await _bookingManager.GetAllBookingsAsync();
            var result = ObjectMapper.Map<List<BookingResponseDto>>(bookings);
            var totalCount = result.Count;
            return new PagedResultDto<BookingResponseDto>(totalCount, result);
        }

        public async Task<List<BookingResponseDto>> GetByUserId(long userId)
        {
            var bookings = await _bookingManager.GetBookingsByUserId(userId);

            var result = ObjectMapper.Map<List<BookingResponseDto>>(bookings);

            return result;
        }
    }
}