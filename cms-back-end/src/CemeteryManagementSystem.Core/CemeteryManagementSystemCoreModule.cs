﻿using Abp.Localization;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Abp.Runtime.Security;
using Abp.Timing;
using Abp.Zero;
using Abp.Zero.Configuration;
using CemeteryManagementSystem.Authorization.Roles;
using CemeteryManagementSystem.Authorization.Users;
using CemeteryManagementSystem.Configuration;
using CemeteryManagementSystem.Localization;
using CemeteryManagementSystem.MultiTenancy;
using CemeteryManagementSystem.Timing;

namespace CemeteryManagementSystem;

[DependsOn(typeof(AbpZeroCoreModule))]
public class CemeteryManagementSystemCoreModule : AbpModule
{
    public override void PreInitialize()
    {
        Configuration.Auditing.IsEnabledForAnonymousUsers = true;

        // Declare entity types
        Configuration.Modules.Zero().EntityTypes.Tenant = typeof(Tenant);
        Configuration.Modules.Zero().EntityTypes.Role = typeof(Role);
        Configuration.Modules.Zero().EntityTypes.User = typeof(User);

        CemeteryManagementSystemLocalizationConfigurer.Configure(Configuration.Localization);

        // Enable this line to create a multi-tenant application.
        Configuration.MultiTenancy.IsEnabled = CemeteryManagementSystemConsts.MultiTenancyEnabled;

        // Configure roles
        AppRoleConfig.Configure(Configuration.Modules.Zero().RoleManagement);

        Configuration.Settings.Providers.Add<AppSettingProvider>();

        Configuration.Localization.Languages.Add(new LanguageInfo("fa", "فارسی", "famfamfam-flags ir"));

        Configuration.Settings.SettingEncryptionConfiguration.DefaultPassPhrase = CemeteryManagementSystemConsts.DefaultPassPhrase;
        SimpleStringCipher.DefaultPassPhrase = CemeteryManagementSystemConsts.DefaultPassPhrase;
    }

    public override void Initialize()
    {
        IocManager.RegisterAssemblyByConvention(typeof(CemeteryManagementSystemCoreModule).GetAssembly());
    }

    public override void PostInitialize()
    {
        IocManager.Resolve<AppTimes>().StartupTime = Clock.Now;
    }
}
