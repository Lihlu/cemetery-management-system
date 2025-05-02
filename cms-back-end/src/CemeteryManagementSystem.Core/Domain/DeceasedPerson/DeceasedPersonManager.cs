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
    }
}
