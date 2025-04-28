using Abp.AspNetCore;
using Abp.AspNetCore.TestBase;
using Abp.Modules;
using Abp.Reflection.Extensions;
using CemeteryManagementSystem.EntityFrameworkCore;
using CemeteryManagementSystem.Web.Startup;
using Microsoft.AspNetCore.Mvc.ApplicationParts;

namespace CemeteryManagementSystem.Web.Tests;

[DependsOn(
    typeof(CemeteryManagementSystemWebMvcModule),
    typeof(AbpAspNetCoreTestBaseModule)
)]
public class CemeteryManagementSystemWebTestModule : AbpModule
{
    public CemeteryManagementSystemWebTestModule(CemeteryManagementSystemEntityFrameworkModule abpProjectNameEntityFrameworkModule)
    {
        abpProjectNameEntityFrameworkModule.SkipDbContextRegistration = true;
    }

    public override void PreInitialize()
    {
        Configuration.UnitOfWork.IsTransactional = false; //EF Core InMemory DB does not support transactions.
    }

    public override void Initialize()
    {
        IocManager.RegisterAssemblyByConvention(typeof(CemeteryManagementSystemWebTestModule).GetAssembly());
    }

    public override void PostInitialize()
    {
        IocManager.Resolve<ApplicationPartManager>()
            .AddApplicationPartsIfNotAddedBefore(typeof(CemeteryManagementSystemWebMvcModule).Assembly);
    }
}