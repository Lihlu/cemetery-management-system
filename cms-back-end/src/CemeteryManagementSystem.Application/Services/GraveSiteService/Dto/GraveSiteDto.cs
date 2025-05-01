using System;
using Abp.Application.Services.Dto;
using System.ComponentModel.DataAnnotations;
using Abp.AutoMapper;
using CemeteryManagementSystem.Domain.GraveSite;

namespace CemeteryManagementSystem.Services.GraveSiteService.Dto
{
    [AutoMap(typeof(GraveSite))]
    public class GraveSiteDto : EntityDto<Guid>
    {
        [Required]
        public Guid CemeterySectionId { get; set; }
        [Required]
        [StringLength(50, ErrorMessage = "Site Number cannot be longer than 50 characters.")]
        public string SiteNumber { get; set; }
        [Required]
        public bool IsExtraDeep { get; set; }
        public string Occupant1IdNumber { get; set; }
        public string Occupant2IdNumber { get; set; }
    }
}
