using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace CemeteryManagementSystem.Controllers
{
    public abstract class CemeteryManagementSystemControllerBase : AbpController
    {
        protected CemeteryManagementSystemControllerBase()
        {
            LocalizationSourceName = CemeteryManagementSystemConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
