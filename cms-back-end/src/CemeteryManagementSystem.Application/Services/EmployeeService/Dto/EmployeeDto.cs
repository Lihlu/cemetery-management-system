using System;
using System.ComponentModel.DataAnnotations;
using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using CemeteryManagementSystem.Domain.Employee;

namespace CemeteryManagementSystem.Services.EmployeeService.Dto
{
    [AutoMap(typeof(Employee))]
    public class EmployeeDto : EntityDto<Guid>
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
        public string EmployeeNumber { get; set; }
        [Required]
        public string Section { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
