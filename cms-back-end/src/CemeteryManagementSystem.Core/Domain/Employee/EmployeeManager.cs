using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abp.Domain.Repositories;
using Abp.Domain.Services;
using Abp.UI;
using CemeteryManagementSystem.Authorization.Users;

namespace CemeteryManagementSystem.Domain.Employee
{
    public class EmployeeManager : DomainService
    {
        private readonly UserManager _userManager;
        private readonly IRepository<Employee, Guid> _employeeRepository;

        public EmployeeManager(UserManager userManager, IRepository<Employee, Guid> employeeRepository)
        {
            _userManager = userManager;
            _employeeRepository = employeeRepository;
        }

        public async Task<Employee> CreateEmployeeAsync(string username, string firstName, string surname, string emailAddress, string password, string employeeNumber, string section)
        {
            // Check if the username is already taken
            var existingUser = await _userManager.FindByNameAsync(username);
            if (existingUser != null)
            {
                throw new UserFriendlyException($"Username '{username}' is already taken.");
            }

            // Check if the email is already used
            var existingEmailUser = await _userManager.FindByEmailAsync(emailAddress);
            if (existingEmailUser != null)
            {
                throw new UserFriendlyException($"Email '{emailAddress}' is already in use.");
            }

            var user = new User
            {
                Name = firstName,
                Surname = surname,
                EmailAddress = emailAddress,
                UserName = username,
            };

            var userCreationResult = await _userManager.CreateAsync(user, password);
            if (!userCreationResult.Succeeded)
            {
                throw new UserFriendlyException($"User creation failed");
            }

            await _userManager.AddToRoleAsync(user, "employee");

            Employee employee = new Employee
            {
                EmployeeNumber = employeeNumber,
                Section = section,
                User = user,
            };

            var result = await _employeeRepository.InsertAsync(employee);

            return result;

        }
    }
}
