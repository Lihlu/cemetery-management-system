using System;
using System.Threading.Tasks;
using Abp.Domain.Repositories;
using Abp.Domain.Services;
using Abp.UI;

namespace CemeteryManagementSystem.Domain.DeceasedPerson
{
    public class DeceasedPersonManager : DomainService
    {
        private readonly IRepository<DeceasedPerson, Guid> _deceasedPersonRepository;

        public DeceasedPersonManager(IRepository<DeceasedPerson, Guid> deceasedPersonRepository)
        {
            _deceasedPersonRepository = deceasedPersonRepository;
        }

        public async Task<DeceasedPerson> CreateDeceasedPersonAsync(
            string firstName,
            string lastName,
            DateTime dateOfBirth,
            DateTime dateOfDeath,
            DateTime dateOfFuneral,
            string graveNumber,
            string section,
            string idNumber,
            bool isBuried = false)
        {
            // Check if the ID number is already registered
            var existingDeceased = await _deceasedPersonRepository.FirstOrDefaultAsync(d => d.IdNumber == idNumber);
            if (existingDeceased != null)
            {
                throw new UserFriendlyException($"A deceased person with ID Number '{idNumber}' is already registered.");
            }

            var deceasedPerson = new DeceasedPerson
            {
                FirstName = firstName,
                LastName = lastName,
                DateOfBirth = dateOfBirth,
                DateOfDeath = dateOfDeath,
                DateOfFuneral = dateOfFuneral,
                GraveNumber = graveNumber,
                Section = section,
                IdNumber = idNumber,
                isBuried = isBuried
            };

            var result = await _deceasedPersonRepository.InsertAsync(deceasedPerson);

            return result;
        }

        public async Task<PagedResultDto<DeceasedPerson>> SearchDeceasedPersonsAsync(SearchDeceasedPersonInput input)
        {
            var query = _deceasedPersonRepository
                .GetAll()
                .WhereIf(!input.FirstName.IsNullOrWhiteSpace(), d => d.FirstName.Contains(input.FirstName))
                .WhereIf(!input.LastName.IsNullOrWhiteSpace(), d => d.LastName.Contains(input.LastName))
                .WhereIf(!input.IdNumber.IsNullOrWhiteSpace(), d => d.IdNumber.Contains(input.IdNumber))
                .WhereIf(!input.GraveNumber.IsNullOrWhiteSpace(), d => d.GraveNumber.Contains(input.GraveNumber))
                .WhereIf(!input.Section.IsNullOrWhiteSpace(), d => d.Section.Contains(input.Section))
                .WhereIf(input.IsBuried.HasValue, d => d.isBuried == input.IsBuried.Value)
                .WhereIf(input.DateOfDeathStart.HasValue, d => d.DateOfDeath >= input.DateOfDeathStart.Value)
                .WhereIf(input.DateOfDeathEnd.HasValue, d => d.DateOfDeath <= input.DateOfDeathEnd.Value);

            var totalCount = await query.CountAsync();

            var deceasedPersons = await query
                .OrderBy(input.Sorting.IsNullOrWhiteSpace() ? "FirstName ASC" : input.Sorting)
                .PageBy(input)
                .ToListAsync();

            return new PagedResultDto<DeceasedPerson>(totalCount, deceasedPersons);
        }

    }
}
