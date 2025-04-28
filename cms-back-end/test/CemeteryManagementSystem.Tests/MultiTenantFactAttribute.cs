using Xunit;

namespace CemeteryManagementSystem.Tests;

public sealed class MultiTenantFactAttribute : FactAttribute
{
    public MultiTenantFactAttribute()
    {
        if (!CemeteryManagementSystemConsts.MultiTenancyEnabled)
        {
            Skip = "MultiTenancy is disabled.";
        }
    }
}
