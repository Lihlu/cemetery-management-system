using System;
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
        public BookingAppService(IRepository<Booking, Guid> repository)
            : base(repository)
        {
        }
    }
}