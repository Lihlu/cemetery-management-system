using System;
using System.ComponentModel.DataAnnotations;
using Abp.Application.Services.Dto;
using AutoMapper;
using CemeteryManagementSystem.Domain.DeceasedPerson;

namespace CemeteryManagementSystem.Services.DeceasedPersonService.Dto
{
    [AutoMap(typeof(DeceasedPerson))]
    public class DeceasedPersonDto : EntityDto<Guid>
    {
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public DateTime DateOfBirth { get; set; }
        [Required]
        public DateTime DateOfDeath { get; set; }
        [Required]
        public DateTime DateOfFuneral { get; set; }
        public string GraveNumber { get; set; }
        public string Section { get; set; }
        [Required]
        [StringLength(13, MinimumLength = 13, ErrorMessage = "Please make sure Identity Number is 13 digits")]
        public string IdNumber { get; set; }
        public long? RegisteredBy { get; set; }
    }
}
