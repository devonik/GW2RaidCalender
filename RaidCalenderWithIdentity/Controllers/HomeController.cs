using Database.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RaidCalenderWithIdentity.Controllers
{
    public class HomeController : Controller
    {
        /// <summary>
        /// The database
        /// </summary>
        private ApplicationDbContext db = new ApplicationDbContext();
        public ActionResult Index()
        {
            ViewBag.Username = User.Identity.Name;
            return View(from ApplicationUserManager.Rassen );
        }
        public JsonResult GetData()
        {
            return Json((from a in db.Users
                         select new
                         {
                             user = a.Id
                         }), JsonRequestBehavior.AllowGet);

        }
    }
}
