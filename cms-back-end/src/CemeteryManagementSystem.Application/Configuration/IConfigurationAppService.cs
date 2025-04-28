using CemeteryManagementSystem.Configuration.Dto;
using System.Threading.Tasks;

namespace CemeteryManagementSystem.Configuration;

public interface IConfigurationAppService
{
    Task ChangeUiTheme(ChangeUiThemeInput input);
}
