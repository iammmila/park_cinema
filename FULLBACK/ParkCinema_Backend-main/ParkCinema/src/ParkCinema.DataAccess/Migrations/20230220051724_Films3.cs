using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ParkCinema.DataAccess.Migrations
{
    public partial class Films3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Uri",
                table: "Films",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Uri",
                table: "Films");
        }
    }
}
