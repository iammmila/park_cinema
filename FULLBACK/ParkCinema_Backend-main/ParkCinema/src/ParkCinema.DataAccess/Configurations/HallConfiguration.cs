using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ParkCinema.Core.Entities;

namespace ParkCinema.DataAccess.Configurations;

public class HallConfiguration : IEntityTypeConfiguration<Hall>
{
    public void Configure(EntityTypeBuilder<Hall> builder)
    {

        builder
                .HasOne(x => x.Cinema)
                .WithMany(c => c.Halls)
                .HasForeignKey(i => i.CinemaId);


        builder.Property(p => p.HallName)
                .IsRequired(true)
                .HasMaxLength(100);
        builder.Property(p => p.NumberOfColumn)
                .IsRequired(true);
        builder.Property(p => p.NumberOfRow)
                .IsRequired(true);


    }
}
