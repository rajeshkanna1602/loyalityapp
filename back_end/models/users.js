const users = [
  {
    uId: 1001,
    userName: "admin",
    password: "admin",
    loyalityPoint: 0,
  },
  {
    uId: 101,
    userName: "user1",
    password: "password1",
    loyalityPoint: 0,
  },
  {
    uId: 102,
    userName: "user2",
    password: "password2",
    loyalityPoint: 0,
  },
  {
    uId: 103,
    userName: "user3",
    password: "password3",
    loyalityPoint: 0,
  },
  {
    uId: 104,
    userName: "user4",
    password: "password4",
    loyalityPoint: 0,
  },
  {
    uId: 105,
    userName: "user5",
    password: "password5",
    loyalityPoint: 0,
  },
  {
    uId: 106,
    userName: "user6",
    password: "password6",
    loyalityPoint: 0,
  },
  {
    uId: 107,
    userName: "user7",
    password: "password7",
    loyalityPoint: 0,
  },
  {
    uId: 108,
    userName: "user8",
    password: "password8",
    loyalityPoint: 0,
  },
  {
    uId: 109,
    userName: "user9",
    password: "password9",
    loyalityPoint: 0,
  },
  {
    uId: 110,
    userName: "user10",
    password: "password10",
    loyalityPoint: 0,
  },
];

module.exports = class Users {
  constructor(user) {
    this.userName = user.userName;
    this.password = user.password;
  }

  static fetchAll() {
    return users;
  }
};
