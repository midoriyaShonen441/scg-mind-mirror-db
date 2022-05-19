const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model();

const userMood = new Schema(
    {
        uid:{ type:String, default:null }, 
        name:{ type:String, default:null }, 
        email:{ type:String, default:null }, 
        phone:{ type:String, default:null }, 
        address:{ type:String, default:null }, 
        voiceMood:{ type:String, default:null }, 
        faceMood:{ type:String, default:null }
    },
    {
        timestamps: true
    }
);

module.exports = Model("moodCollection", userMood);