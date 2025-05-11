using System;
using Abp.Application.Services.Dto;
using System.ComponentModel.DataAnnotations;
using Abp.AutoMapper;
using CemeteryManagementSystem.Domain.CemeterySection;
using System.Collections.Generic;

namespace CemeteryManagementSystem.Services.CemeterySectionService.Dto
{
    [AutoMap(typeof(CemeterySection))]
    public class CemeterySectionDto : EntityDto<Guid>
    {
        [Required]
        [StringLength(100, ErrorMessage = "Section Name cannot be longer than 100 characters.")]
        public string Name { get; set; }

        [Required]
        [StringLength(50, ErrorMessage = "Section Type cannot be longer than 50 characters.")]
        public string Type { get; set; }

        [Required]
        [Range(1, int.MaxValue, ErrorMessage = "Number of rows must be greater than 0.")]
        public int NumberOfRows { get; set; }

        [Required]
        [Range(1, int.MaxValue, ErrorMessage = "Total capacity must be greater than 0.")]
        public int TotalCapacity { get; set; }

        [Required]
        [Range(0, int.MaxValue, ErrorMessage = "Number of available sites cannot be negative.")]
        public int NumberOfAvailableSites { get; set; }

        public List<int> sitesPerRow { get; set; }
    }
}
