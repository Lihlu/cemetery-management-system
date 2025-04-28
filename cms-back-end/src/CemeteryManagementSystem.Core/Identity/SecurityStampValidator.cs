using Abp.Authorization;
using Abp.Domain.Uow;
using CemeteryManagementSystem.Authorization.Roles;
using CemeteryManagementSystem.Authorization.Users;
using CemeteryManagementSystem.MultiTenancy;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace CemeteryManagementSystem.Identity;

public class SecurityStampValidator : AbpSecurityStampValidator<Tenant, Role, User>
{
    public SecurityStampValidator(
        IOptions<SecurityStampValidatorOptions> options,
        SignInManager signInManager,
        ILoggerFactory loggerFactory,
        IUnitOfWorkManager unitOfWorkManager)
        : base(options, signInManager, loggerFactory, unitOfWorkManager)
    {
    }
}
