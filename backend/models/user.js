import mongoose from "mongoose";
import validator from 'validator';


const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true
        },
        userName: {
            type: String,
            required: true,
            unique: true,
            validate: [validator.isEmail, "Provide a valid email!"],   
        },
        password: {
            type: String,
            required: true,
            minlength: 6
        },
        phone: {
            type: String,
            require: true,
            minLength: [10, "Phone number must contaion only 10 digits!"],
            maxLength: [10, "Phone number must contaion only 10 digits!"],
        },
        address: {
             type: String
        },
        
        gender: {
            type: String,
            required: true,
            enum: ['male', 'female']
        },
       
    },{timestamps: true}
);

const User = mongoose.model('User', userSchema);

export default User;
