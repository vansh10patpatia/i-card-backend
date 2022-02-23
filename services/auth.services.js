require("dotenv").config();
const createError = require("http-errors");
const bcrypt = require("bcryptjs");
const jwt = require("../utils/jwt");
const { Student } = require("../models");

class AuthService {
  static register = async data => {
    // return data
    const { userid} = data;

      let test_user = await Student.find({ userid:userid });
      // console.log(test_user);
      if (test_user.userid) {
        throw createError.BadRequest("Id taken");
      }
    data.password = bcrypt.hashSync(data.password, 8);
    let user = await Student.create({
      userid: userid,
      password: data.password,
    });
    // console.log(user);

    data.accessToken = await jwt.signAccessToken(user);
    return data;
  };

  static login = async (data) => {
    const request = JSON.parse(JSON.stringify(data))
    const { userid, password } = JSON.parse(JSON.stringify(data));

    const user = await Student.findOne({ userid: userid });
    if (!user) {
      throw createError.BadRequest("User not found");
    }

    const checkPass = bcrypt.compareSync(password, user.password);
    if (!checkPass) {
      throw createError.Unauthorized("Passwords dont match");
    }
    delete user.password;
    const accessToken = await jwt.signAccessToken(user._doc,{expiresIn:'48h'});
    return { ...user._doc, accessToken };
  };

  static verifyAccessToken=()=>{

  }

  static all = async () => {
    // return "hi";
    const allUsers = await Student.find();

    return allUsers;
  };
}

module.exports = AuthService;
