using System;
using Abp.Application.Services;
using CemeteryManagementSystem.Services.BookingService.Dto;

namespace CemeteryManagementSystem.Services.BookingService
{
    public interface IBookingAppService : IAsyncCrudAppService<BookingDto, Guid>
    {
    }
}