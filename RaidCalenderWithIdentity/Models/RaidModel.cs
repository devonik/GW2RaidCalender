using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace RaidCalenderWithIdentity.Models
{
    [Table("dbo.Raid")]
    public class RaidModel { 
        [Key]
        public int Raid_Id { get; set; }
        public string Bezeichnung { get; set; }
        public string Image { get; set; }
        public int Eventart_Id { get; set; }
    }
}