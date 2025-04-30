using Abp.Authorization;
using CemeteryManagementSystem.Authorization.Roles;
using CemeteryManagementSystem.Authorization.Users;

namespace CemeteryManagementSystem.Authorization;

public class PermissionChecker : PermissionChecker<Role, User>
{
    public PermissionChecker(UserManager userManager)
        : base(userManager)
    {
    }
}
