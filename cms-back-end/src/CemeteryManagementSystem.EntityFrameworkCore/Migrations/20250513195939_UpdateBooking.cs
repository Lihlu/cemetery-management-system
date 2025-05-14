using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CemeteryManagementSystem.Migrations
{
    /// <inheritdoc />
    public partial class UpdateBooking : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "DateAndTimeOfFuneral",
                table: "Bookings",
                newName: "ServiceDateTime");

            migrationBuilder.AddColumn<int>(
                name: "BookingStatus",
                table: "Bookings",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "BookingType",
                table: "Bookings",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<Guid>(
                name: "GraveSiteId",
                table: "Bookings",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_Bookings_GraveSiteId",
                table: "Bookings",
                column: "GraveSiteId");

            migrationBuilder.AddForeignKey(
                name: "FK_Bookings_GraveSites_GraveSiteId",
                table: "Bookings",
                column: "GraveSiteId",
                principalTable: "GraveSites",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Bookings_GraveSites_GraveSiteId",
                table: "Bookings");

            migrationBuilder.DropIndex(
                name: "IX_Bookings_GraveSiteId",
                table: "Bookings");

            migrationBuilder.DropColumn(
                name: "BookingStatus",
                table: "Bookings");

            migrationBuilder.DropColumn(
                name: "BookingType",
                table: "Bookings");

            migrationBuilder.DropColumn(
                name: "GraveSiteId",
                table: "Bookings");

            migrationBuilder.RenameColumn(
                name: "ServiceDateTime",
                table: "Bookings",
                newName: "DateAndTimeOfFuneral");
        }
    }
}
