using System.Data.Entity;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace RaidCalenderWithIdentity.Models
{
    public class CustomUserRole : IdentityUserRole<int> { }
    public class CustomUserClaim : IdentityUserClaim<int> { }
    public class CustomUserLogin : IdentityUserLogin<int> { }

    public class CustomRole : IdentityRole<int, CustomUserRole>
    {
        public CustomRole() { }
        public CustomRole(string name) { Name = name; }
    }

    public class CustomUserStore : UserStore<ApplicationUser, CustomRole, int,
        CustomUserLogin, CustomUserRole, CustomUserClaim>
    {
        public CustomUserStore(ApplicationDbContext context)

            : base(context)
        {
        }
    }

    public class CustomRoleStore : RoleStore<CustomRole, int, CustomUserRole>
    {
        public CustomRoleStore(ApplicationDbContext context)
            : base(context)
        {
        }
    }
    // Sie können Profildaten für den Benutzer durch Hinzufügen weiterer Eigenschaften zur ApplicationUser-Klasse hinzufügen. Weitere Informationen finden Sie unter "http://go.microsoft.com/fwlink/?LinkID=317594".
    public class ApplicationUser : IdentityUser<int, CustomUserLogin, CustomUserRole,
    CustomUserClaim>
    {
        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser, int> manager)
        {
            // Beachten Sie, dass der "authenticationType" mit dem in "CookieAuthenticationOptions.AuthenticationType" definierten Typ übereinstimmen muss.
            var userIdentity = await manager.CreateIdentityAsync(this, DefaultAuthenticationTypes.ApplicationCookie);
            // Benutzerdefinierte Benutzeransprüche hier hinzufügen
            return userIdentity;
        }
    }

    public class ApplicationDbContext : IdentityDbContext<ApplicationUser, CustomRole,
    int, CustomUserLogin, CustomUserRole, CustomUserClaim>
    {
        
        public ApplicationDbContext()
            : base("DefaultConnection")
        {
        }
        public DbSet<Klasse2User> Klasse2User { get; set; }
        //public DbSet<Klasse> Klassen { get; set; }
        //protected override void OnModelCreating(System.Data.Entity.DbModelBuilder modelBuilder)
        //{
        //    //Rename the AspNetTable and set Id Column to User_Id
        //    modelBuilder.Entity<IdentityUser>().ToTable("User").Property(p => p.Id).HasColumnName("User_Id");
        //    // the all important base class call! Add this line to make your problems go away.
        //    base.OnModelCreating(modelBuilder);
        //}
        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }
    }
}