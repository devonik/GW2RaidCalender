using System;
using System.Collections.Generic;
using MySql.Data.MySqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;

namespace Database.Handler
{
    public class MysqlHandler
    {
        public void OpenConnection()
        {
            using (MySqlConnection connection = new MySqlConnection(GetSqlConnectionString()))
            {
                connection.Open();
            }
        }
        public void CloseConnection()
        {
            using (MySqlConnection connection = new MySqlConnection(GetSqlConnectionString()))
            {
                connection.Close();
            }
        }
        private static string GetSqlConnectionString()
        {
            string connectionString = ConfigurationManager.ConnectionStrings["Gw2AppConnectionMysql"].ConnectionString;
            if (connectionString == null)
            {
                var f = String.Format("Could not find setting '{0}',", connectionString);
                return null;
            }
            else
            {
                return connectionString;
            }
        }
    }
}
