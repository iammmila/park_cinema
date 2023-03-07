using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ParkCinema.Core.Entities;

namespace ParkCinema.DataAccess.Configurations;

public class FormatConfiguration : IEntityTypeConfiguration<Format>
{
    public void Configure(EntityTypeBuilder<Format> builder)
    {
        builder.Property(x => x.Name)
            .IsRequired(true)
            .HasMaxLength(100);
    }
}
