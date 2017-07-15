using Database.Handler;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Data;
using MySql.Data.MySqlClient;
using System.Configuration;
using Database.Model;

namespace Database.Repository
{
    public class RaidCalenderRepository/* : LocalDbHandler*/
    {
        private ApplicationIdentity db = new Appl();
        private string _connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
        //public IEnumerable GetData()
        //{
        //    MySqlDataReader dataReader;
        //    using (MySqlCommand command = new MySqlCommand())
        //    {
        //        command.CommandText = "Select * from test";
        //        command.CommandType = CommandType.Text;

        //        OpenConnection();

        //        dataReader = command.ExecuteReader();

        //        CloseConnection();
        //    }
        //    return dataReader;

        //}

        //public IEnumerable GetData()
        //{
        //    SqlDataReader reader;

        //    using (SqlCommand command = new SqlCommand())
        //    {
        //        command.CommandText = "Select * from AspNetUsers";
        //        command.CommandType = CommandType.Text;
        //        OpenConnection();

        //        reader = command.ExecuteReader();

        //        CloseConnection();
        //    }
        //    return reader;

        //}
        public String GetData()
        {
            List<RassenModel> data = new List<RassenModel>();
            SqlConnection con = new SqlConnection(_connectionString);
            con.Open();
            using (con)
            {
                SqlCommand command = new SqlCommand("Select * from User");

                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {

                }
                return "Test";
            }
            

        }

    }
}
