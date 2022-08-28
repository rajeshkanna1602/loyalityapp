const express = require("express");
const app = express();
const port = 5000;
const userController = require("../back_end/controllers/users");
const productController = require("../back_end/controllers/products");

var bodyParser = require("body-parser");

app.use(bodyParser.json({ limit: "1000mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "1000mb",
    extended: true,
    parameterLimit: 90000,
  })
);

// app.use(express.bodyParser());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send(JSON.stringify({ msg: "response" })).end();
});

app.post("/login", userController.getUsers);

app.get("/getproducts", productController.getProducts);
app.get("/getusers", userController.getAllUsers);

app.post("/setloyality", userController.setLoyality);

app.listen(port, () => {
  console.log(`Backend app listening on port ${port}`);
});
