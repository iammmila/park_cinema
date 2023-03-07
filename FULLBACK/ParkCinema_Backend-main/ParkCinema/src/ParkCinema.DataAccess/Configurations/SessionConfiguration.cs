using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ParkCinema.Core.Entities;

namespace ParkCinema.DataAccess.Configurations;

public class SessionConfiguration : IEntityTypeConfiguration<Session>
{
    public void Configure(EntityTypeBuilder<Session> builder)
    {
        builder
               .HasOne(x => x.Hall)
               .WithMany(c => c.Sessions)
               .HasForeignKey(i => i.Hall_Id);
        builder
               .HasOne(x => x.Film)
               .WithMany(c => c.Sessions)
               .HasForeignKey(i => i.Film_Id);
        builder
               .HasOne(x => x.Format)
               .WithMany(c => c.Sessions)
               .HasForeignKey(i => i.Format_Id);
        builder
               .HasOne(x => x.Language)
               .WithMany(c => c.Sessions)
               .HasForeignKey(i => i.Language_Id);
        builder
               .HasOne(x => x.Subtitle)
               .WithMany(c => c.Sessions)
               .HasForeignKey(i => i.Subtitle_Id);


        builder.Property(p => p.StartTime)
               .IsRequired(true);

        builder.Property(p => p.Price)
               .IsRequired(true);


    }
}
