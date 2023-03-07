using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ParkCinema.DataAccess.Migrations
{
    public partial class Sessions2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Price",
                table: "Sessions",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Price",
                table: "Sessions");
        }
    }
}
