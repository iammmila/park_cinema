using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ParkCinema.Core.Entities;

namespace ParkCinema.DataAccess.Configurations;

public class SeatConfiguration : IEntityTypeConfiguration<Seat>
{
    public void Configure(EntityTypeBuilder<Seat> builder)
    {
        builder
               .HasOne(x => x.Hall)
               .WithMany(c => c.Seats)
               .HasForeignKey(i => i.Hall_ID);

        builder
               .HasOne(x => x.SeatType)
               .WithMany(c => c.Seats)
               .HasForeignKey(i => i.SeatType_ID);


        builder.Property(p => p.Row)
                .IsRequired(true);
        builder.Property(p => p.Column)
                .IsRequired(true);
        builder.Property(p => p.IsEmpty)
                .IsRequired(true);

    }
}
