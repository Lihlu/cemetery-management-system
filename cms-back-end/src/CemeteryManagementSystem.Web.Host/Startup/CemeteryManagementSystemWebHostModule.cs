using Abp.Modules;
using Abp.Reflection.Extensions;
using CemeteryManagementSystem.Configuration;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;

namespace CemeteryManagementSystem.Web.Host.Startup
{
    [DependsOn(
       typeof(CemeteryManagementSystemWebCoreModule))]
    public class CemeteryManagementSystemWebHostModule : AbpModule
    {
        private readonly IWebHostEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public CemeteryManagementSystemWebHostModule(IWebHostEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(CemeteryManagementSystemWebHostModule).GetAssembly());
        }
    }
}
