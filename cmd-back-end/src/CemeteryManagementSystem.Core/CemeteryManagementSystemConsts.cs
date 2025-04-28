using CemeteryManagementSystem.Debugging;

namespace CemeteryManagementSystem;

public class CemeteryManagementSystemConsts
{
    public const string LocalizationSourceName = "CemeteryManagementSystem";

    public const string ConnectionStringName = "Default";

    public const bool MultiTenancyEnabled = true;


    /// <summary>
    /// Default pass phrase for SimpleStringCipher decrypt/encrypt operations
    /// </summary>
    public static readonly string DefaultPassPhrase =
        DebugHelper.IsDebug ? "gsKxGZ012HLL3MI5" : "69372a6c13124088b606d16a58329277";
}
