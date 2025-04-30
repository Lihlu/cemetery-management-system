using System.Linq;
using System;
using Abp.Zero.EntityFrameworkCore;
using CemeteryManagementSystem.Authorization.Roles;
using CemeteryManagementSystem.Authorization.Users;
using CemeteryManagementSystem.Domain.PublicUser;
using CemeteryManagementSystem.MultiTenancy;
using Microsoft.EntityFrameworkCore;
using CemeteryManagementSystem.Domain.Employee;

namespace CemeteryManagementSystem.EntityFrameworkCore;

public class CemeteryManagementSystemDbContext : AbpZeroDbContext<Tenant, Role, User, CemeteryManagementSystemDbContext>
{
    /* Define a DbSet for each entity of the application */
    public DbSet<PublicUser> PublicUsers { get; set; }
    public DbSet<Address> Addresses { get; set; }
    public DbSet<Employee> Employees { get; set; }
    public CemeteryManagementSystemDbContext(DbContextOptions<CemeteryManagementSystemDbContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Force all DateTime and DateTime? to be treated as UTC
        foreach (var entityType in modelBuilder.Model.GetEntityTypes())
        {
            foreach (var property in entityType.GetProperties()
                .Where(p => p.ClrType == typeof(DateTime) || p.ClrType == typeof(DateTime?)))
            {
                property.SetValueConverter(new Microsoft.EntityFrameworkCore.Storage.ValueConversion.ValueConverter<DateTime, DateTime>(
                    v => v.Kind == DateTimeKind.Utc ? v : v.ToUniversalTime(),
                    v => DateTime.SpecifyKind(v, DateTimeKind.Utc)
                ));
            }
        }
    }
}
