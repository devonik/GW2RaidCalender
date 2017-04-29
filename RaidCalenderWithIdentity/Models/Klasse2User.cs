using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace RaidCalenderWithIdentity.Models
{
    public class Klasse2User
    {

        [Key]
        public int Klasse2User_Id { get; set; }
        public int User_Id { get; set; }
        public int Klasse_Id { get; set; }
        public int Rasse_Id { get; set; }
        public string Bezeichnung { get; set; }
    }
}