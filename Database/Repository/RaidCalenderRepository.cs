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

namespace Database.Repository
{
    public class RaidCalenderRepository : MysqlHandler
    {
        public IEnumerable GetData()
        {
            MySqlDataReader dataReader;
            using (MySqlCommand command = new MySqlCommand())
            {
                command.CommandText = "Select * from test";
                command.CommandType = CommandType.Text;

                OpenConnection();

                dataReader = command.ExecuteReader();

                CloseConnection();
            }
            return dataReader;

        }

        //public IEnumerable GetDataMssql()
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

    }
}
