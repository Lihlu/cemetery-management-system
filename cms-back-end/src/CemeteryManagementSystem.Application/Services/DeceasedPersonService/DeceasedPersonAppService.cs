using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using CemeteryManagementSystem.Domain.DeceasedPerson;
using CemeteryManagementSystem.Services.DeceasedPersonService.Dto;

namespace CemeteryManagementSystem.Services.DeceasedPersonService
{
    [AbpAuthorize]
    public class DeceasedPersonAppService : AsyncCrudAppService<DeceasedPerson, DeceasedPersonDto, Guid>, IDeceasedPersonAppService
    {
        private readonly DeceasedPersonManager _deceasedPersonManager;

        public DeceasedPersonAppService(IRepository<DeceasedPerson, Guid> repository, DeceasedPersonManager deceasedPersonManager)
            : base(repository)
        {
            _deceasedPersonManager = deceasedPersonManager;
        }
        public override async Task<DeceasedPersonDto> CreateAsync(DeceasedPersonDto input)
        {
            DeceasedPerson deceasedPerson = await _deceasedPersonManager.CreateDeceasedPersonAsync(
                input.FirstName,
                input.LastName,
                input.DateOfBirth,
                input.DateOfDeath,
                input.DateOfFuneral,
                input.GraveNumber,
                input.Section,
                input.IdNumber,
                input.RegisteredBy
            );
            return ObjectMapper.Map<DeceasedPersonDto>(deceasedPerson);
        }
        public async Task<PagedResultDto<DeceasedPersonDto>> SearchAsync(SearchDeceasedPersonInputDto input)
        {
            var result = await _deceasedPersonManager.SearchDeceasedPersonsAsync(input.FirstName, input.LastName, input.IdNumber, input.GraveNumber, input.Section, input.IsBuried, input.DateOfDeathStart, input.DateOfDeathEnd);

            var totalCount = result.Count();
            var pagedResults = result
                .Skip(0)
                .Take(10)
                .ToList();

            return new PagedResultDto<DeceasedPersonDto>(
                totalCount,
                ObjectMapper.Map<List<DeceasedPersonDto>>(pagedResults)
            );
        }

        public async Task<List<DeceasedPersonDto>> GetByRegisteredByAsync(long registeredByUserId)
        {
            var persons = await _deceasedPersonManager.GetDeceasedPersonsByRegisteredByAsync(registeredByUserId);

            return ObjectMapper.Map<List<DeceasedPersonDto>>(persons);
        }

    }
}
