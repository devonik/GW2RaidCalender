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
        public ActionResult Index()
        {
            ViewBag.Username = User.Identity.Name;
            return View(ViewBag);
        }
        public JsonResult GetData()
        {
            RaidCalenderRepository repo = new RaidCalenderRepository();
            
                return Json(repo.GetData());
            
        }
    }
}