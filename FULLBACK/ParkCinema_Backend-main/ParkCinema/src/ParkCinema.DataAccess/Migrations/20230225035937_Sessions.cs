using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ParkCinema.DataAccess.Migrations
{
    public partial class Sessions : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Sessions",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    StartTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Hall_Id = table.Column<int>(type: "int", nullable: false),
                    Film_Id = table.Column<int>(type: "int", nullable: false),
                    Format_Id = table.Column<int>(type: "int", nullable: false),
                    Language_Id = table.Column<int>(type: "int", nullable: false),
                    Subtitle_Id = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sessions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Sessions_Films_Film_Id",
                        column: x => x.Film_Id,
                        principalTable: "Films",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Sessions_Formats_Format_Id",
                        column: x => x.Format_Id,
                        principalTable: "Formats",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Sessions_Halls_Hall_Id",
                        column: x => x.Hall_Id,
                        principalTable: "Halls",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Sessions_Languages_Language_Id",
                        column: x => x.Language_Id,
                        principalTable: "Languages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Sessions_Subtitles_Subtitle_Id",
                        column: x => x.Subtitle_Id,
                        principalTable: "Subtitles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Sessions_Film_Id",
                table: "Sessions",
                column: "Film_Id");

            migrationBuilder.CreateIndex(
                name: "IX_Sessions_Format_Id",
                table: "Sessions",
                column: "Format_Id");

            migrationBuilder.CreateIndex(
                name: "IX_Sessions_Hall_Id",
                table: "Sessions",
                column: "Hall_Id");

            migrationBuilder.CreateIndex(
                name: "IX_Sessions_Language_Id",
                table: "Sessions",
                column: "Language_Id");

            migrationBuilder.CreateIndex(
                name: "IX_Sessions_Subtitle_Id",
                table: "Sessions",
                column: "Subtitle_Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Sessions");
        }
    }
}
