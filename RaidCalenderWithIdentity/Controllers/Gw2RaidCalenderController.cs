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
        #region Event
            #region CreateEvent
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
                    return "Neues Event wurde gespeichert";
                }
                catch (Exception ex)
                {
                    return "ErrorMessage: " + ex;
                }
            }
            #endregion
            #region DetailEvent
            public JsonResult GetAllEvents()
            {
            var list = (from a in _db.EventModel
                        join b in _db.EventartModel on a.Eventart_Id equals b.Eventart_Id
                        select new
                        {
                            eventart = b.Bezeichnung,
                            title = a.Bezeichnung,
                            image = _db.RaidModel.Where(x => x.Raid_Id == a.Raid_Id).FirstOrDefault().Image,
                           start = a.startTag,
                           end = a.endeTag,
                           von = a.startUhrzeit,
                           bis = a.endeUhrzeit,
                           character = (from c in _db.KlasseModel
                                        join d in _db.Klasse2EventModel on a.Event_Id equals d.Event_Id
                                        where d.Klasse_Id == c.Klasse_Id
                                        select new
                                        {
                                            id = c.Klasse_Id,
                                            name = c.Bezeichnung,
                                            image = c.Avatarlink,
                                            maxTeilnehmer = d.MaxTeilnehmer
                                        })
                       }).ToList();
            return Json(list, JsonRequestBehavior.AllowGet);
            }
            #endregion
        #endregion
    }
}