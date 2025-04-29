using System;
using System.ComponentModel.DataAnnotations;
using Abp.Application.Services.Dto;

namespace CemeteryManagementSystem.Services.PublicUserService.Dto
{
    public class PublicUserDto : EntityDto<Guid>
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Surname { get; set; }
        [Required]
        [EmailAddress(ErrorMessage = "Invalid email address entered")]
        public string Email { get; set; }
        [Required]
        public string Username { get; set; }
        [Required]
        [Phone]
        [StringLength(10, ErrorMessage = "Please make sure contact number is 10 digits")]
        public string ContactNo { get; set; }
        [Required]
        [StringLength(13, ErrorMessage = "Please make sure Identity Number is 13 digits")]
        public string NationalIdNumber { get; set; }
    }
}
