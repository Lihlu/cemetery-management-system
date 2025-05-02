using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CemeteryManagementSystem.Migrations
{
    /// <inheritdoc />
    public partial class AddBookingsTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Bookings",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    BookerId = table.Column<long>(type: "bigint", nullable: false),
                    DeceasedPersonId = table.Column<Guid>(type: "uuid", nullable: false),
                    DateAndTimeOfFuneral = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    SpecialRequest = table.Column<string>(type: "text", nullable: true),
                    CreationTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    CreatorUserId = table.Column<long>(type: "bigint", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    LastModifierUserId = table.Column<long>(type: "bigint", nullable: true),
                    IsDeleted = table.Column<bool>(type: "boolean", nullable: false),
                    DeleterUserId = table.Column<long>(type: "bigint", nullable: true),
                    DeletionTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Bookings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Bookings_AbpUsers_BookerId",
                        column: x => x.BookerId,
                        principalTable: "AbpUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Bookings_DeceasedPeople_DeceasedPersonId",
                        column: x => x.DeceasedPersonId,
                        principalTable: "DeceasedPeople",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Bookings_BookerId",
                table: "Bookings",
                column: "BookerId");

            migrationBuilder.CreateIndex(
                name: "IX_Bookings_DeceasedPersonId",
                table: "Bookings",
                column: "DeceasedPersonId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Bookings");
        }
    }
}
