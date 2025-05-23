using Microsoft.EntityFrameworkCore;
using System.Data.Common;

namespace CemeteryManagementSystem.EntityFrameworkCore;

public static class CemeteryManagementSystemDbContextConfigurer
{
    public static void Configure(DbContextOptionsBuilder<CemeteryManagementSystemDbContext> builder, string connectionString)
    {
        builder.UseNpgsql(connectionString);
    }

    public static void Configure(DbContextOptionsBuilder<CemeteryManagementSystemDbContext> builder, DbConnection connection)
    {
        builder.UseNpgsql(connection);
    }
}
