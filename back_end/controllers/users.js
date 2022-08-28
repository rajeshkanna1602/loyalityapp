const Users = require("../models/users");

exports.getUsers = (req, res, next) => {
  const users = Users.fetchAll();

  const findUser = users.filter(
    (user) =>
      user.userName == req.body.userName && user.password == req.body.password
  );
  if (findUser.length > 0) {
    res.send({
      status: true,
      message: "user Found",
      userName: findUser[0].userName,
      loyalityPoint: findUser[0].loyalityPoint,
      uId: findUser[0].uId,
      price: findUser[0].price,
    });
  } else {
    res.send({ status: false, res: "user Not Found" });
  }
};

exports.setLoyality = (req, res, next) => {
  const users = Users.fetchAll();
  const luser = users.filter((user) => user.uId == req.body.uId);
  luser[0].loyalityPoint =
    luser[0].loyalityPoint + Number(req.body.price) * (0.25 / 100);
  const index = users.findIndex((user) => user.uId == req.body.uId);
  users.splice(index, 1);
  users.push(luser[0]);
  // Users.save(index, luser);
  res.send({ status: true, loyalityPoint: luser[0].loyalityPoint });
};

exports.getAllUsers = (req, res, next) => {
  const users = Users.fetchAll();
  const loyalityPointUsers = users.map((user) => ({
    uId: user.uId,
    userName: user.userName,
    loyalityPointUsers: user.loyalityPoint,
  }));
  res.send(loyalityPointUsers.filter((user) => user.userName != "admin"));
};
