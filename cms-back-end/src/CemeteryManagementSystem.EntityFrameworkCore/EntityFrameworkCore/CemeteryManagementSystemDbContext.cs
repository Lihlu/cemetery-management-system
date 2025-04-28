using Abp.Zero.EntityFrameworkCore;
using CemeteryManagementSystem.Authorization.Roles;
using CemeteryManagementSystem.Authorization.Users;
using CemeteryManagementSystem.MultiTenancy;
using Microsoft.EntityFrameworkCore;

namespace CemeteryManagementSystem.EntityFrameworkCore;

public class CemeteryManagementSystemDbContext : AbpZeroDbContext<Tenant, Role, User, CemeteryManagementSystemDbContext>
{
    /* Define a DbSet for each entity of the application */

    public CemeteryManagementSystemDbContext(DbContextOptions<CemeteryManagementSystemDbContext> options)
        : base(options)
    {
    }
}
