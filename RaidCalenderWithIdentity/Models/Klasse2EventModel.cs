using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace RaidCalenderWithIdentity.Models
{
    [Table("Klasse2Event")]
    public class Klasse2EventModel
    {
        [Key]
        public int Klasse2Event_Id{get;set;}
        public int Klasse_Id { get; set; }
        public int Event_Id { get; set; }
        public int MaxTeilnehmer { get; set; }
    }
}