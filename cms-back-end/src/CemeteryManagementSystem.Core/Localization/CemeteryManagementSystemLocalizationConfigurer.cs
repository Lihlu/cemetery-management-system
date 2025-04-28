using Abp.Configuration.Startup;
using Abp.Localization.Dictionaries;
using Abp.Localization.Dictionaries.Xml;
using Abp.Reflection.Extensions;

namespace CemeteryManagementSystem.Localization;

public static class CemeteryManagementSystemLocalizationConfigurer
{
    public static void Configure(ILocalizationConfiguration localizationConfiguration)
    {
        localizationConfiguration.Sources.Add(
            new DictionaryBasedLocalizationSource(CemeteryManagementSystemConsts.LocalizationSourceName,
                new XmlEmbeddedFileLocalizationDictionaryProvider(
                    typeof(CemeteryManagementSystemLocalizationConfigurer).GetAssembly(),
                    "CemeteryManagementSystem.Localization.SourceFiles"
                )
            )
        );
    }
}
