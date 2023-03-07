using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ParkCinema.DataAccess.Migrations
{
    public partial class Film_Subtitles : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Film_Subtitles",
                columns: table => new
                {
                    Film_Id = table.Column<int>(type: "int", nullable: false),
                    Subtitle_Id = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Film_Subtitles", x => new { x.Film_Id, x.Subtitle_Id });
                    table.ForeignKey(
                        name: "FK_Film_Subtitles_Films_Film_Id",
                        column: x => x.Film_Id,
                        principalTable: "Films",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Film_Subtitles_Subtitles_Subtitle_Id",
                        column: x => x.Subtitle_Id,
                        principalTable: "Subtitles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Film_Subtitles_Subtitle_Id",
                table: "Film_Subtitles",
                column: "Subtitle_Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Film_Subtitles");
        }
    }
}
