using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace RaidCalenderWithIdentity.Models
{
    public class EventartModel
    {
        [Key]
        public int Eventart_Id { get; set; }
        public string Bezeichnung { get; set; }
    }
}