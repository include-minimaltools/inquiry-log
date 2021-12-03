namespace inquiry_log.Models
{
    using Microsoft.EntityFrameworkCore;

    public partial class InquiryModel : DbContext
    {
        public InquiryModel(DbContextOptions<InquiryModel> options)
            : base(options)
        {
        }

        public virtual DbSet<Course> Course { get; set; }
        public virtual DbSet<Inquiry> Inquiry { get; set; }
        public virtual DbSet<Inquiry_Comment> Inquiry_Comment { get; set; }
        public virtual DbSet<Inquiry_Type> Inquiry_Type { get; set; }
        public virtual DbSet<Permission> Permission { get; set; }
        public virtual DbSet<Role> Role { get; set; }
        public virtual DbSet<Role_Permission> Role_Permission { get; set; }
        public virtual DbSet<sysdiagrams> sysdiagrams { get; set; }
        public virtual DbSet<User> User { get; set; }
        public virtual DbSet<User_Course> User_Course { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Course>()
                .HasMany(e => e.Inquiry)
                .WithOne(e => e.Course1)
                .HasForeignKey(e => e.Course)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Course>()
                .HasMany(e => e.User_Course)
                .WithOne(e => e.Course1)
                .HasForeignKey(e => e.Course)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Inquiry_Comment>()
                .HasMany(e => e.Inquiry)
                .WithOne(e => e.Inquiry_Comment)
                .HasForeignKey(e => e.Comments)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Inquiry_Type>()
                .HasMany(e => e.Inquiry)
                .WithOne(e => e.Inquiry_Type)
                .HasForeignKey(e => e.Type)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Permission>()
                .HasMany(e => e.Role_Permission)
                .WithOne(e => e.Permission1)
                .HasForeignKey(e => e.Permission)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Role>()
                .HasMany(e => e.Role_Permission)
                .WithOne(e => e.Role1)
                .HasForeignKey(e => e.Role)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Role>()
                .HasMany(e => e.User)
                .WithOne(e => e.Role1)
                .HasForeignKey(e => e.Role)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<User>()
                .HasMany(e => e.Inquiry)
                .WithOne(e => e.User)
                .HasForeignKey(e => e.Teacher)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<User>()
                .HasMany(e => e.User_Course)
                .WithOne(e => e.User1)
                .HasForeignKey(e => e.User)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Group>()
                .HasMany(e => e.Course_Group)
                .WithOne(e => e.Group1)
                .HasForeignKey(e => e.Group)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Course_Group>()
                .HasKey(e => new { e.Course, e.Group });

            modelBuilder.Entity<Role_Permission>()
                .HasKey(e => new { e.Role, e.Permission });

            modelBuilder.Entity<User_Course>()
                .HasKey(e => new { e.User, e.Course });
            
        }
    }
}
