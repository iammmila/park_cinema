using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ParkCinema.Core.Entities;

namespace ParkCinema.DataAccess.Configurations;

public class SeatTypeConfiguration : IEntityTypeConfiguration<SeatType>
{
    public void Configure(EntityTypeBuilder<SeatType> builder)
    {

    builder.Property(p => p.Type)
                .IsRequired(true)
                .HasMaxLength(20);

    
    }
}
