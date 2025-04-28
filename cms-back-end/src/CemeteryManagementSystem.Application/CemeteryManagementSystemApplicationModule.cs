using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using CemeteryManagementSystem.Authorization;

namespace CemeteryManagementSystem;

[DependsOn(
    typeof(CemeteryManagementSystemCoreModule),
    typeof(AbpAutoMapperModule))]
public class CemeteryManagementSystemApplicationModule : AbpModule
{
    public override void PreInitialize()
    {
        Configuration.Authorization.Providers.Add<CemeteryManagementSystemAuthorizationProvider>();
    }

    public override void Initialize()
    {
        var thisAssembly = typeof(CemeteryManagementSystemApplicationModule).GetAssembly();

        IocManager.RegisterAssemblyByConvention(thisAssembly);

        Configuration.Modules.AbpAutoMapper().Configurators.Add(
            // Scan the assembly for classes which inherit from AutoMapper.Profile
            cfg => cfg.AddMaps(thisAssembly)
        );
    }
}
