using Abp.EntityFrameworkCore.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Abp.Zero.EntityFrameworkCore;
using CemeteryManagementSystem.EntityFrameworkCore.Seed;

namespace CemeteryManagementSystem.EntityFrameworkCore;

[DependsOn(
    typeof(CemeteryManagementSystemCoreModule),
    typeof(AbpZeroCoreEntityFrameworkCoreModule))]
public class CemeteryManagementSystemEntityFrameworkModule : AbpModule
{
    /* Used it tests to skip dbcontext registration, in order to use in-memory database of EF Core */
    public bool SkipDbContextRegistration { get; set; }

    public bool SkipDbSeed { get; set; }

    public override void PreInitialize()
    {
        if (!SkipDbContextRegistration)
        {
            Configuration.Modules.AbpEfCore().AddDbContext<CemeteryManagementSystemDbContext>(options =>
            {
                if (options.ExistingConnection != null)
                {
                    CemeteryManagementSystemDbContextConfigurer.Configure(options.DbContextOptions, options.ExistingConnection);
                }
                else
                {
                    CemeteryManagementSystemDbContextConfigurer.Configure(options.DbContextOptions, options.ConnectionString);
                }
            });
        }
    }

    public override void Initialize()
    {
        IocManager.RegisterAssemblyByConvention(typeof(CemeteryManagementSystemEntityFrameworkModule).GetAssembly());
    }

    public override void PostInitialize()
    {
        if (!SkipDbSeed)
        {
            SeedHelper.SeedHostDb(IocManager);
        }
    }
}
