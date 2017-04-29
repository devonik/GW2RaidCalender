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
        private ApplicationDbContext _db = new ApplicationDbContext();
        public ActionResult Index()
        {
            ViewBag.Username = User.Identity.Name;
            return View(ViewBag);
        }
        public JsonResult GetAllUser()
        {
            
            return Json(_db.Users.ToList(), JsonRequestBehavior.AllowGet);

        }
        public JsonResult GetUserCharsByCurrentUser()
        {

            var list = _db.Database.SqlQuery<ViewUserCharsModel>("Select * from dbo.UserChars where UserName = @p0", User.Identity.Name);

            return Json(list, JsonRequestBehavior.AllowGet);
        }
        public void AddNewCharToUser(int klasse_id, int rasse_id, string bezeichnung)
        {
           
            var klasse2User = new Klasse2User
            {
                User_Id = User.Identity.GetUserId<int>(),
                Klasse_Id = klasse_id,
                Rasse_Id = rasse_id,
                Bezeichnung = bezeichnung
            };
            if (klasse2User.Klasse2User_Id == 0)
            {
                _db.Entry(klasse2User).State = EntityState.Added;

            }
            else
            {
                _db.Entry(klasse2User).State = EntityState.Modified;
            }
            try
            {
                _db.Klasse2User.Add(klasse2User);
                _db.SaveChanges();
            }
            catch(Exception ex)
            {

            }
        }
        public JsonResult GetAllClasses()
        {
            var list = _db.Database.SqlQuery<KlasseModel>("Select * from dbo.Klasse");
            return Json(list, JsonRequestBehavior.AllowGet);
        }
        public JsonResult GetAllRace()
        {
            var list = _db.Database.SqlQuery<RasseModel>("Select * from dbo.Rasse");
            return Json(list, JsonRequestBehavior.AllowGet);
        }
        public void DeleteChar(int? id)
        {
            if (id != null)
            {
                var row = new Klasse2User { Klasse2User_Id = (int)id };
                _db.Klasse2User.Attach(row);
                _db.Klasse2User.Remove(row);
                _db.SaveChanges();
            }
            else
            {
                var latestRow = _db.Klasse2User.OrderByDescending(p => p.Klasse2User_Id).FirstOrDefault();
                var newId = latestRow.Klasse2User_Id + 1;
                _db.Klasse2User.Remove(latestRow);
                _db.SaveChanges();
            }
        }
    }
}
