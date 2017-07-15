using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace RaidCalenderWithIdentity.Models
{
    [Table("dbo.Eventart")]
    public class EventartModel
    {
        [Key]
        public int Eventart_Id { get; set; }
        public string Bezeichnung { get; set; }
    }
}