using Abp.MultiTenancy;
using CemeteryManagementSystem.Authorization.Users;

namespace CemeteryManagementSystem.MultiTenancy;

public class Tenant : AbpTenant<User>
{
    public Tenant()
    {
    }

    public Tenant(string tenancyName, string name)
        : base(tenancyName, name)
    {
    }
}
