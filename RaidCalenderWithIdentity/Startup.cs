using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(RaidCalenderWithIdentity.Startup))]
namespace RaidCalenderWithIdentity
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
