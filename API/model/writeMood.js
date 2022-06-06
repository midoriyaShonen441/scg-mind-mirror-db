const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userMood = new Schema(
    {
        uid:{ type:String, default:null }, 
        name:{ type:String, default:null }, 
        email:{ type:String, default:null }, 
        phone:{ type:String, default:null }, 
        address:{ type:String, default:null },

        // voice data //
        voiceWord:{ type:String, default:null },
        voiceScore:{ type:Number, default:null },
        voiceMagnitude:{ type:Number, default:null },
        voiceMood:{ type:String, default:null },
        
        // video data //
        faceAnger:{ type:String, default:null },
        faceJoy:{ type:String, default:null },
        faceSurprise:{ type:String, default:null },
        faceSorrow:{ type:String, default:null },
        faceMood:{ type:String, default:null }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("moodCollection", userMood);