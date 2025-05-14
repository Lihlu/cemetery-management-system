using System;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using CemeteryManagementSystem.Services.BookingService.Dto;

namespace CemeteryManagementSystem.Services.BookingService
{
    public interface IBookingAppService : IAsyncCrudAppService<BookingDto, Guid>
    {
        public Task<PagedResultDto<BookingResponseDto>> GetAllBookingsAsync(PagedAndSortedResultRequestDto input);
    }
}