const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userMood = new Schema(
    {
        uid:{ type:String, default:null }, 
        name:{ type:String, default:null }, 
        email:{ type:String, default:null }, 
        phone:{ type:String, default:null }, 
        address:{ type:String, default:null }, 
        voiceMood:{ 
            word:{ type:String, default:null },
            select_lang:{ type:String, default:null },
            sentiment_score:{ type:Number, default:null },
            sentiment_magnitude: { type:Number, default:null },
            feeling: { type:String, default:null }
        }, 
        faceMood:{ 
            anger: { type:String, default:null },
            joy:{ type:String, default:null },
            surprise:{ type:String, default:null },
            sorrow:{ type:String, default:null },
            highest_emotion:{ type:String, default:null }
         }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("moodCollection", userMood);