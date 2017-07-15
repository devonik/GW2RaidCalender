using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RaidCalenderWithIdentity.Controllers
{
    public class RaidLogsController : Controller
    {
        // GET: RaidLogs
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult DisplayLogResult(string bossname)
        {
            return PartialView(bossname);
        }
    }
}