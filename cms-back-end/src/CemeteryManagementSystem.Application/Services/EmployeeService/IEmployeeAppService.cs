using System;
using Abp.Application.Services;
using CemeteryManagementSystem.Services.EmployeeService.Dto;

namespace CemeteryManagementSystem.Services.EmployeeService
{
    public interface IEmployeeAppService : IAsyncCrudAppService<EmployeeDto, Guid>
    {
    }
}
