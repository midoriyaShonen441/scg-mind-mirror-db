const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT;
const HOST_IP = process.env.HOST_IP;

const app = express();
app.use(express.json());

app.post(`${ HOST_IP }/db/write`, async (req, res) => {

    const { uid, name, email, phone, address, voiceMood, faceMood } = req.body;
    require("./connection/connectDB").connect;
    const writeMood = require("./model/writeMood");
    
    try {
        await writeMood.create({
            uid:uid, 
            name:name, 
            email:email, 
            phone:phone, 
            address:address, 
            voiceMood:voiceMood, 
            faceMood:faceMood
        });
        res.send("OK");
    }
    catch(err) {
        const errReply = {
            isError: true,
            text: err
        };
        res.send(errReply);
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${ PORT }, http://localhost:${ PORT }`);
})

