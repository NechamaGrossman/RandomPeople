using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RandomPeople.Data.Migrations
{
    public partial class dateofbirth : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "DateOfBirth",
                table: "People",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DateOfBirth",
                table: "People");
        }
    }
}
