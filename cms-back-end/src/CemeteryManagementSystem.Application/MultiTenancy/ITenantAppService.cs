using Abp.Application.Services;
using CemeteryManagementSystem.MultiTenancy.Dto;

namespace CemeteryManagementSystem.MultiTenancy;

public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
{
}

