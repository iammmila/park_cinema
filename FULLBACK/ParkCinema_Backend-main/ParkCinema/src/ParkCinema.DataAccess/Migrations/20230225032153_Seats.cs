using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ParkCinema.DataAccess.Migrations
{
    public partial class Seats : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Seats",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Row = table.Column<int>(type: "int", nullable: false),
                    Column = table.Column<int>(type: "int", nullable: false),
                    IsEmpty = table.Column<bool>(type: "bit", nullable: false),
                    SeatType_ID = table.Column<int>(type: "int", nullable: false),
                    Hall_ID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Seats", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Seats_Halls_Hall_ID",
                        column: x => x.Hall_ID,
                        principalTable: "Halls",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Seats_Types_SeatType_ID",
                        column: x => x.SeatType_ID,
                        principalTable: "Types",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Seats_Hall_ID",
                table: "Seats",
                column: "Hall_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Seats_SeatType_ID",
                table: "Seats",
                column: "SeatType_ID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Seats");
        }
    }
}
