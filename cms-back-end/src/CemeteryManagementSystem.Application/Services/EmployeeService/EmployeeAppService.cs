using System;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Domain.Repositories;
using CemeteryManagementSystem.Domain.Employee;
using CemeteryManagementSystem.Services.EmployeeService.Dto;

namespace CemeteryManagementSystem.Services.EmployeeService
{
    public class EmployeeAppService : AsyncCrudAppService<Employee, EmployeeDto, Guid>, IEmployeeAppService
    {
        private readonly EmployeeManager _employeeManager;
        public EmployeeAppService(IRepository<Employee, Guid> repository, EmployeeManager employeeManager) : base(repository)
        {
            _employeeManager = employeeManager;
        }

        public override async Task<EmployeeDto> CreateAsync(EmployeeDto input)
        {
            Employee employee = await _employeeManager.CreateEmployeeAsync(input.Username, input.Name, input.Surname, input.Email, input.Password, input.EmployeeNumber, input.Section);
            return ObjectMapper.Map<EmployeeDto>(employee);
        }
    }
}
