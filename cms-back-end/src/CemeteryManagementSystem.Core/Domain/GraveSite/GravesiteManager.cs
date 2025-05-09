using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Abp.Domain.Repositories;
using Abp.Domain.Services;
using CemeteryManagementSystem.Domain.Bookings;
using Microsoft.EntityFrameworkCore;

namespace CemeteryManagementSystem.Domain.GraveSite
{
    public class GravesiteManager : DomainService
    {
        private readonly IRepository<GraveSite, Guid> _graveSiteRepository;
        public GravesiteManager(IRepository<GraveSite, Guid> graveSiteRepository)
        {
            _graveSiteRepository = graveSiteRepository;
        }

        public async Task<IEnumerable<GraveSite>> GetGraveSitesByOwnerId(long ownerId)
        {
            return await _graveSiteRepository.GetAll()
                 .Where(g => g.OwnerId == ownerId)
                 .ToListAsync();
        }
    }
}
