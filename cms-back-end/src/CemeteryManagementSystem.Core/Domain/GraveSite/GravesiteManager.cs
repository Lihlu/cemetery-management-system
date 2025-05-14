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

        public async Task<IEnumerable<GraveSite>> GetBySectionId(Guid sectionId)
        {
            return await _graveSiteRepository.GetAll()
                .Where(g => g.CemeterySectionId == sectionId)
                .ToListAsync();
        }

        public async Task<GraveSite> UpdateOwner(Guid gravesiteId, long ownerId)
        {
            var gravesite = await _graveSiteRepository.GetAsync(gravesiteId);
            gravesite.OwnerId = ownerId;
            gravesite.IsReserved = true;
            await _graveSiteRepository.UpdateAsync(gravesite);
            return gravesite;
        }
    }
}
