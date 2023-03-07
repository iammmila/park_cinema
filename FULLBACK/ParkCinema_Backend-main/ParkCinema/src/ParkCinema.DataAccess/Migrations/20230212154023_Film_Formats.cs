using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ParkCinema.DataAccess.Migrations
{
    public partial class Film_Formats : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Film_Formats",
                columns: table => new
                {
                    Film_Id = table.Column<int>(type: "int", nullable: false),
                    Format_Id = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Film_Formats", x => new { x.Film_Id, x.Format_Id });
                    table.ForeignKey(
                        name: "FK_Film_Formats_Films_Film_Id",
                        column: x => x.Film_Id,
                        principalTable: "Films",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Film_Formats_Formats_Format_Id",
                        column: x => x.Format_Id,
                        principalTable: "Formats",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Film_Formats_Format_Id",
                table: "Film_Formats",
                column: "Format_Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Film_Formats");
        }
    }
}
