using Database.Repository;
using RaidCalenderWithIdentity.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
using System.Data.Entity;

namespace RaidCalenderWithIdentity.Controllers
{
    public class HomeController : Controller
    {
        /// <summary>
        /// The database
        /// </summary>
        
        public ActionResult Index()
        {
            ViewBag.Username = User.Identity.Name;
            return View(ViewBag);
        }
        
    }
}
