using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ParkCinema.DataAccess.Migrations
{
    public partial class Film_Genres : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Film_Genres",
                columns: table => new
                {
                    Film_Id = table.Column<int>(type: "int", nullable: false),
                    Genre_Id = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Film_Genres", x => new { x.Film_Id, x.Genre_Id });
                    table.ForeignKey(
                        name: "FK_Film_Genres_Films_Film_Id",
                        column: x => x.Film_Id,
                        principalTable: "Films",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Film_Genres_Genres_Genre_Id",
                        column: x => x.Genre_Id,
                        principalTable: "Genres",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Film_Genres_Genre_Id",
                table: "Film_Genres",
                column: "Genre_Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Film_Genres");
        }
    }
}
