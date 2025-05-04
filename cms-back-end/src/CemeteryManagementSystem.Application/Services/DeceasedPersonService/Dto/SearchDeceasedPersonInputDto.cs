using Abp.Application.Services.Dto;
using System;

namespace CemeteryManagementSystem.Services.DeceasedPersonService.Dto
{
    public class SearchDeceasedPersonInputDto : PagedAndSortedResultRequestDto
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string IdNumber { get; set; }
        public string GraveNumber { get; set; }
        public string Section { get; set; }
        public bool? IsBuried { get; set; }
        public DateTime? DateOfDeathStart { get; set; }
        public DateTime? DateOfDeathEnd { get; set; }
    }
}
