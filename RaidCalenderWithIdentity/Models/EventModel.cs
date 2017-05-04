using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace RaidCalenderWithIdentity.Models
{
    [Table("Event")]
    public class EventModel
    {
        [Key]
        public int Event_Id { get; set; }

        public int? Raid_Id { get; set; }
        public int Eventart_Id { get; set; }

        public string Bezeichnung { get; set; }

        public string startTag { get; set; }

        public string endeTag { get; set; }

        public string startUhrzeit { get; set; }

        public string endeUhrzeit { get; set; }
    }
}