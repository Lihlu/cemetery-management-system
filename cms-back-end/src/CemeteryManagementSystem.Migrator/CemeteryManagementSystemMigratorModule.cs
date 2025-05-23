using Abp.Events.Bus;
using Abp.Modules;
using Abp.Reflection.Extensions;
using CemeteryManagementSystem.Configuration;
using CemeteryManagementSystem.EntityFrameworkCore;
using CemeteryManagementSystem.Migrator.DependencyInjection;
using Castle.MicroKernel.Registration;
using Microsoft.Extensions.Configuration;

namespace CemeteryManagementSystem.Migrator;

[DependsOn(typeof(CemeteryManagementSystemEntityFrameworkModule))]
public class CemeteryManagementSystemMigratorModule : AbpModule
{
    private readonly IConfigurationRoot _appConfiguration;

    public CemeteryManagementSystemMigratorModule(CemeteryManagementSystemEntityFrameworkModule abpProjectNameEntityFrameworkModule)
    {
        abpProjectNameEntityFrameworkModule.SkipDbSeed = true;

        _appConfiguration = AppConfigurations.Get(
            typeof(CemeteryManagementSystemMigratorModule).GetAssembly().GetDirectoryPathOrNull()
        );
    }

    public override void PreInitialize()
    {
        Configuration.DefaultNameOrConnectionString = _appConfiguration.GetConnectionString(
            CemeteryManagementSystemConsts.ConnectionStringName
        );

        Configuration.BackgroundJobs.IsJobExecutionEnabled = false;
        Configuration.ReplaceService(
            typeof(IEventBus),
            () => IocManager.IocContainer.Register(
                Component.For<IEventBus>().Instance(NullEventBus.Instance)
            )
        );
    }

    public override void Initialize()
    {
        IocManager.RegisterAssemblyByConvention(typeof(CemeteryManagementSystemMigratorModule).GetAssembly());
        ServiceCollectionRegistrar.Register(IocManager);
    }
}
