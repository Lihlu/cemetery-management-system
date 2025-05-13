using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Abp.Domain.Repositories;
using Abp.Domain.Services;
using Microsoft.EntityFrameworkCore;

namespace CemeteryManagementSystem.Domain.Bookings
{
    public class BookingManager : DomainService
    {
        private readonly IRepository<Booking, Guid> _bookingRepository;
        public BookingManager(IRepository<Booking, Guid> bookingRepository)
        {
            _bookingRepository = bookingRepository;
        }

        public async Task<IEnumerable<Booking>> GetBookingsByUserId(long userId)
        {
            var bookings = await _bookingRepository.GetAll()
                 .Include(b => b.DeceasedPerson)
                 .Where(b => b.BookerId == userId)
                 .ToListAsync();

            return bookings;
        }

        public async Task<IEnumerable<Booking>> GetAllBookingsAsync()
        {
            var bookings = await _bookingRepository.GetAll()
                .Include(b => b.Booker)
     .ToListAsync();
            return bookings;
        }
    }
}
