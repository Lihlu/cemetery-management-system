using Abp.Authorization;
using Abp.Runtime.Session;
using CemeteryManagementSystem.Configuration.Dto;
using System.Threading.Tasks;

namespace CemeteryManagementSystem.Configuration;

[AbpAuthorize]
public class ConfigurationAppService : CemeteryManagementSystemAppServiceBase, IConfigurationAppService
{
    public async Task ChangeUiTheme(ChangeUiThemeInput input)
    {
        await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
    }
}
