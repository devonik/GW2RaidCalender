using Microsoft.AspNet.Identity;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using RaidCalenderWithIdentity.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RaidCalenderWithIdentity.Controllers
{
    public class Gw2RaidCalenderController : Controller
    {
        private ApplicationDbContext _db = new ApplicationDbContext();
        // GET: Gw2RaidCalender
        public ActionResult Index()
        {
            return View();
        }
        #region Requests for Manage
        public JsonResult GetUserCharsByCurrentUser()
        {

            var list = _db.Database.SqlQuery<ViewUserCharsModel>("Select * from dbo.UserChars where UserName = @p0", User.Identity.Name);

            return Json(list, JsonRequestBehavior.AllowGet);
        }
        public int AddNewCharToUser(int klasse_id, int rasse_id, string bezeichnung)
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
                int newId = klasse2User.Klasse2User_Id;
                return newId;
            }
            catch (Exception ex)
            {
                return 0;
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
                
            }
        }
        #endregion
        public JsonResult GetAllRaids()
        {
            var sql = _db.Database.SqlQuery<RaidModel>("Select * from dbo.Raid");
            return Json(sql, JsonRequestBehavior.AllowGet);
        }
        public JsonResult GetAllEventart()
        {
            var sql = _db.Database.SqlQuery<EventartModel>("Select * from dbo.Eventart");
            return Json(sql, JsonRequestBehavior.AllowGet);
        }
        public JsonResult GetAllClassesWithTyp()
        {
            var list = _db.Database.SqlQuery<ViewKlassenModel>("Select * from dbo.V_Klassen");
            
            return Json(list, JsonRequestBehavior.AllowGet);
        }
        public string SaveEvent(EventModel model, string klassenModel)
        {
            //var eventModel = new EventModel
            //{
            //    Bezeichnung = model.
            //};
            //var eventModel = new EventModel { model };
            
            if (model.Event_Id == 0)
            {
                _db.Entry(model).State = EntityState.Added;

            }
            else
            {
                _db.Entry(model).State = EntityState.Modified;
            }
            try
            {
                _db.EventModel.Add(model);
                _db.SaveChanges();
                int newEventId = model.Event_Id;
                var jsonKlassen = JArray.Parse(klassenModel);
                foreach (JObject content in jsonKlassen.Children<JObject>())
                {
                    int klasse_Id = (int)content.Property("Klasse_Id").Value;
                    int maxTeilnehmer = (int)content.Property("MaxTeilnehmer").Value;
                    var klassenmodel = new Klasse2EventModel
                    {
                        Klasse_Id = klasse_Id,
                        MaxTeilnehmer = maxTeilnehmer,
                        Event_Id = newEventId
                    };
                    _db.Klasse2EventModel.Add(klassenmodel);
                    _db.SaveChanges();
                }
                //var modetestl = new Klasse2EventModel
                //{
                //    Klasse_Id = klassenModel.Klasse_Id,
                //    MaxTeilnehmer = klassenModel.MaxTeilnehmer
                //};
                return "Neues Event wurde gespeichert";

                //int newId = klasse2User.Klasse2User_Id;
            }
            catch (Exception ex)
            {
                return "ErrorMessage: " + ex;
            }
        }
    }
}