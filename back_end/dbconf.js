var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "wordpass",
  database: "Qus_bank",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected to the database!");
  //   let query =
  //     "CREATE TABLE IF NOT EXISTS Todo (task_id int NOT NULL AUTO_INCREMENT, task VARCHAR(255) NOT NULL, status VARCHAR(255), PRIMARY KEY (task_id))";
  //   con.query(query, (err, result) => {
  //     if (err) throw err;
  //     console.log(result);
  //   });
  //   let query = "SELECT * FROM question";
  //   con.query(query, (err, result) => {
  //     if (err) throw err;
  //     console.log("result --", result);
  //   });
});
module.exports = con;
