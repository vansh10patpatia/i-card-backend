const mongoose = require("mongoose");

const { Schema } = mongoose;

const studentSchema = new Schema(
	{
		email: {
			type: String,
			unique: true,
			min: 8,
			default:''
		},
        password: {
			type: String,
			required: true,
			min: 8,
		},
        name: {
			type: String,
			default: '',
		},
		phno: {
			type: String,
			default: "",
		},
		blood: {
			type: String,
			default: "",
		},
        session: {
			type: String,
			default: '',
		},
	},
	{ timestamps: true }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
