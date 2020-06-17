using Microsoft.EntityFrameworkCore.Migrations;

namespace RandomPeople.Data.Migrations
{
    public partial class agetoint : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Age",
                table: "People",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Age",
                table: "People",
                nullable: true,
                oldClrType: typeof(int));
        }
    }
}
