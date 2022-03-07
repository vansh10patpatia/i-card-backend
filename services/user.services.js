require("dotenv").config();
const { Student } = require("../models");

class UserService {

    static updateUser = async data =>{
        const {id,name,phno,bloodGroup,session} = JSON.parse(JSON.stringify(data));
        const update = {name:name,phno:phno,blood:bloodGroup,session:session}
        const details = await Student.findOneAndUpdate({_id:id}, update, {
            new: true
          });
        return details;
    }

    static updatePassword = async data => {

        const {oldPassword, newPassword} = JSON.parse(JSON.stringify(data));
        console.log(JSON.parse(JSON.stringify(data)));

    }
}

module.exports = UserService;
