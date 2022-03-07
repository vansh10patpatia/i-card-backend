const user = require("../services/user.services");

class UserController {

  
  
  static editUser = async (req, res, next) => {
    try {
      const data = await user.updateUser(req.body,next);
      res.status(200).json({
        status: "updated",
        data: data,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static changePassword = async (req, res, next)=> {
    try {
        const data = await user.updatePassword(req.body,next);
        res.status(200).json({
          status: "updated",
          data: data,
        });
      } catch (err) {
        console.log(err);
        next(err);
      }
  }

}

module.exports = UserController;
