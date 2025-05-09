using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Castle.MicroKernel.Registration;
using CemeteryManagementSystem.Authorization;
using CemeteryManagementSystem.Configuration;
using CemeteryManagementSystem.PaymentService;
using CemeteryManagementSystem.Web;
using Microsoft.Extensions.Configuration;

namespace CemeteryManagementSystem;

[DependsOn(
    typeof(CemeteryManagementSystemCoreModule),
    typeof(AbpAutoMapperModule))]
public class CemeteryManagementSystemApplicationModule : AbpModule
{
    public override void PreInitialize()
    {
        Configuration.Authorization.Providers.Add<CemeteryManagementSystemAuthorizationProvider>();

        var configuration = AppConfigurations.Get(WebContentDirectoryFinder.CalculateContentRootFolder());

        var paymentConfig = new PaymentConfiguration();
        configuration.GetSection("Payment").Bind(paymentConfig);

        IocManager.IocContainer.Register(
            Component.For<PaymentConfiguration>()
                .Instance(paymentConfig)
                .LifestyleSingleton()
        );
    }


    public override void Initialize()
    {
        var thisAssembly = typeof(CemeteryManagementSystemApplicationModule).GetAssembly();

        IocManager.RegisterAssemblyByConvention(thisAssembly);
        IocManager.Resolve<IPaymentService>();

        Configuration.Modules.AbpAutoMapper().Configurators.Add(
            // Scan the assembly for classes which inherit from AutoMapper.Profile
            cfg => cfg.AddMaps(thisAssembly)
        );
    }
}
