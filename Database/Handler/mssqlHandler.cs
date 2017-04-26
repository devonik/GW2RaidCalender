using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Database.Handler
{
    public class MssqlHandler
    {
        public void OpenConnection()
        {
            using (SqlConnection connection = new SqlConnection(GetSqlConnectionString()))
            {
                connection.Open();
            }
        }
        public void CloseConnection()
        {
            using (SqlConnection connection = new SqlConnection(GetSqlConnectionString()))
            {
                connection.Close();
            }
        }
        private static string GetSqlConnectionString()
        {
            string connectionString = ConfigurationManager.ConnectionStrings["Gw2AppConnectionMssql"].ConnectionString;
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
