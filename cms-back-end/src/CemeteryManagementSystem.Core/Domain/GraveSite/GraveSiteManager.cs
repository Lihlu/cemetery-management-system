using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abp.Domain.Repositories;
using Abp.Domain.Services;
using Microsoft.EntityFrameworkCore;
using NuGet.Protocol.Core.Types;

namespace CemeteryManagementSystem.Domain.GraveSite
{
    public class GraveSiteManager : DomainService
    {
        private readonly IRepository<GraveSite, Guid> _graveSiteRepository;
        public GraveSiteManager(IRepository<GraveSite, Guid> graveSiteRepository)
        {
            _graveSiteRepository = graveSiteRepository;
        }
        public async Task<IEnumerable<GraveSite>> GetByCemeterySectionIdAsync(Guid cemeterySectionId)
        {
            var graveSites = await _graveSiteRepository.GetAllAsync();

            var filteredGraveSites = graveSites.AsEnumerable();

            filteredGraveSites = filteredGraveSites.Where(g => g.CemeterySectionId == cemeterySectionId);

            return filteredGraveSites;
        }
    }
}
