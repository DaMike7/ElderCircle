import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email:{
            type:String,
            required:true,
            unique:true,
        },

        first_name:{
            type:String,
            required:true,
        },

        last_name:{
            type:String,
            required:true,
        },

        nickname:{
            type:String,
            required:true,
            unique:true
        },

        phone_number:{
            type:String,
            required:true,
            unique:true
        },

        password:{
            type:String,
            required:true,
            minLength:8,
        },

        dob:{
            type:Date,
            required:true,

        },

        country:{
            type:Text,
            required:true,
        },

        city:{
            type:Text,
            required:true,
        },

        ip_address:{
            type:Int,
            required:true,
        },
        profile_picture:{
            type:String,
            default:""
        },
        verified:{
            type:Boolean,
            default:false,
        }
    },
    {timestamps:true},
)

const User = mongoose.model("User",userSchema);

export default User;