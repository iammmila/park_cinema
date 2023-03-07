using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ParkCinema.DataAccess.Migrations
{
    public partial class Films : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Films",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    AgeLimit = table.Column<int>(type: "int", nullable: false),
                    DurationMinute = table.Column<int>(type: "int", nullable: false),
                    Country = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Director = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Actors = table.Column<string>(type: "TEXT", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: false),
                    Trailer = table.Column<string>(type: "TEXT", nullable: false),
                    Poster = table.Column<string>(type: "TEXT", nullable: false),
                    IsNew = table.Column<bool>(type: "bit", nullable: false),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Films", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Films");
        }
    }
}
