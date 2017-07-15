using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace RaidCalenderWithIdentity.Models
{
    [Table("dbo.User2Event")]
    public class User2EventModel
    {
        [Key]
        public int User2Event_Id { get; set; }
        public int User_Id { get; set; }
        public int Event_Id { get; set; }
        public int Klasse2Event_Id { get; set; }
    }
}