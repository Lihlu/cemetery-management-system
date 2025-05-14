using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CemeteryManagementSystem.Migrations
{
    /// <inheritdoc />
    public partial class AddRegisteredBy : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<long>(
                name: "RegisteredBy",
                table: "DeceasedPeople",
                type: "bigint",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "RegisteredBy",
                table: "DeceasedPeople");
        }
    }
}
