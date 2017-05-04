using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RaidCalenderWithIdentity.Models
{
    public class RaidModel { 
        public int Raid_Id { get; set; }
        public string Bezeichnung { get; set; }
        public string Image { get; set; }
        public int Eventart_Id { get; set; }
    }
}