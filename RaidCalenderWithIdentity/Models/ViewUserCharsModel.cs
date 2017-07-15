using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RaidCalenderWithIdentity.Models
{
    public class ViewUserCharsModel
    {
        public int Klasse2User_Id { get; set; }
        public string klasse_name { get; set; }
        public string klasse_img { get; set; }
        public string rasse_name { get; set; }
        public string rasse_img { get; set; }
        public string char_name { get; set; }
        public string UserName { get; set; }
    }
}