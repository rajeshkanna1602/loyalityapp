const con = require("../dbconf");

exports.question = (req, res, next) => {
  let query = "SELECT * FROM question";
  con.query(query, (err, result) => {
    if (err) throw err;
    console.log("result --", result);
    res.send({
      status: true,
      message: "question found",
      result: result,
    });
  });
};

// app.post("/question", (req, res) => {
//   console.log(req.body);

//   let query = "SELECT * FROM question";
//   con.query(query, (err, result) => {
//     if (err) throw err;
//     console.log("result --", result);
//   });

//   //   let query = "INSERT INTO Todo (task, status) VALUES ?";
//   //   data = [[req.body.task, "ongoing"]];
//   //   con.query(query, [data], (err, result) => {
//   //     if (err) throw err;
//   //     console.log(result);
//   //     res.redirect("/");
//   //   });
// });
