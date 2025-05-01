using System;
using System.Threading.Tasks;
using Abp.Application.Services;
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
                input.IdNumber
            );

            return ObjectMapper.Map<DeceasedPersonDto>(deceasedPerson);
        }
    }
}
