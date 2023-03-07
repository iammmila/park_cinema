using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ParkCinema.DataAccess.Migrations
{
    public partial class Film_Languages : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Film_Languages",
                columns: table => new
                {
                    Film_Id = table.Column<int>(type: "int", nullable: false),
                    Language_Id = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Film_Languages", x => new { x.Film_Id, x.Language_Id });
                    table.ForeignKey(
                        name: "FK_Film_Languages_Films_Film_Id",
                        column: x => x.Film_Id,
                        principalTable: "Films",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Film_Languages_Languages_Language_Id",
                        column: x => x.Language_Id,
                        principalTable: "Languages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Film_Languages_Language_Id",
                table: "Film_Languages",
                column: "Language_Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Film_Languages");
        }
    }
}
