using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Abp.Application.Services.Dto;
using Abp.Collections.Extensions;
using Abp.Domain.Repositories;
using Abp.Domain.Services;
using Abp.Extensions;
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
        public async Task<IEnumerable<DeceasedPerson>> SearchDeceasedPersonsAsync(
     string firstName = "",
     string lastName = "",
     string idNumber = "",
     string graveNumber = "",
     string section = "",
     bool? isBuried = null,
     DateTime? dateOfDeathStart = null,
     DateTime? dateOfDeathEnd = null
     )
        {
            var persons = await _deceasedPersonRepository.GetAllAsync();

            var filteredPersons = persons.AsEnumerable();

            if (!firstName.IsNullOrWhiteSpace())
                filteredPersons = filteredPersons.Where(d => d.FirstName.Contains(firstName));

            if (!lastName.IsNullOrWhiteSpace())
                filteredPersons = filteredPersons.Where(d => d.LastName.Contains(lastName));

            if (!idNumber.IsNullOrWhiteSpace())
                filteredPersons = filteredPersons.Where(d => d.IdNumber.Contains(idNumber));

            if (!graveNumber.IsNullOrWhiteSpace())
                filteredPersons = filteredPersons.Where(d => d.GraveNumber.Contains(graveNumber));

            if (!section.IsNullOrWhiteSpace())
                filteredPersons = filteredPersons.Where(d => d.Section.Contains(section));

            if (isBuried.HasValue)
                filteredPersons = filteredPersons.Where(d => d.isBuried == isBuried.Value);

            if (dateOfDeathStart.HasValue)
                filteredPersons = filteredPersons.Where(d => d.DateOfDeath >= dateOfDeathStart.Value);

            if (dateOfDeathEnd.HasValue)
                filteredPersons = filteredPersons.Where(d => d.DateOfDeath <= dateOfDeathEnd.Value);

            return filteredPersons;
        }

    }
}
