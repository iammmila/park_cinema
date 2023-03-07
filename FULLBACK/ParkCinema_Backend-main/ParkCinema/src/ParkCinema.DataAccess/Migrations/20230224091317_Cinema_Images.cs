using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ParkCinema.DataAccess.Migrations
{
    public partial class Cinema_Images : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Cinema_Images",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Image = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ImageContainerName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    ImageUri = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    CinemaId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cinema_Images", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Cinema_Images_Cinemas_CinemaId",
                        column: x => x.CinemaId,
                        principalTable: "Cinemas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Cinema_Images_CinemaId",
                table: "Cinema_Images",
                column: "CinemaId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cinema_Images");
        }
    }
}
