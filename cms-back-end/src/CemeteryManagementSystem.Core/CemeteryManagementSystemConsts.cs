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
        DebugHelper.IsDebug ? "gsKxGZ012HLL3MI5" : "621fbc730aad4f21ba13bd4018d65a58";
}
