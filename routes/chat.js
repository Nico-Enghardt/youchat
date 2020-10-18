const uuid = require('uuid');
const router = require("./benutzer");
const fs = require('fs');
const { SSL_OP_NO_COMPRESSION } = require('constants');
const { fileURLToPath } = require('url');
const { response } = require('express');
const file = require('./Modules/files');


router.post('/create', (req, res) => {
    const newChat = {
        id: uuid.v4(),
        name: req.body.name,
        messages: []
    }

    if (req.body.participants.length < 1) {
        res.status(401).send("Invite some dudes to your chat. There are no participants currently.")
    }

    var nutzer = file.read(__dirname + '/../data/benutzer.json', res);
    console.log(nutzer);

    fs.readFile(__dirname + '/../data/benutzer.json',
        (err, data) => {
            if (err) console.log(err);
            //console.log(data);
            var nutzer = JSON.parse(data);

            //console.log(data);
            for (par of req.body.participants) {
                if (!uuid.validate(par.id)) { return console.log("User", par, "could not be recognized as a user with a correct Id.") };

                nutzer.find((user) => { return user.id == par.id }).chats.push({
                    id: newChat.id,
                    firstMessage: 0
                });
            }
            //console.log(nutzer);
            fs.writeFile(__dirname + '/../data/benutzer.json',
                JSON.stringify(nutzer, null, "\t"),
                (err) => {
                    if (err) { console.log(err) }
                }
            );
        });

    fs.open(__dirname + '/../data/chats/' + newChat.id + ".json", "w",
        (err, fileDescriptor) => {
            console.log(fileDescriptor);
            if (err || !fileDescriptor) {
                res.sendStatus(500);
                return console.log("File already exists. Error", err)
            }
            fs.writeFile(fileDescriptor,
                JSON.stringify(newChat, null, "\t"),
                (err) => {
                    if (err) {
                        res.status(500).send("Internal Error. Will be fixed soon.")
                        console.log("Could not write new Chat file.Error:", err)
                    } else {
                        res.status(200).send("Successfully created new Chat!")
                    }
                })
        })

});

router.get('/nachrichten*', function (req, res, next) {

    var chatId = req.query.id;

    if (!chatId) { return res.json({ msg: "Id for chat identification missing." }) }

    var chat = file.process(file.read('./data/chats/' + chatId + ".json"), res);
    if (!chat) { return }

    return res.json(chat.messages);
});

router.post('/nachrichten*', function (req, res, next) {
    var chatId = req.query.id;
    var newMessage = {
        text: req.body.text,
        absender: req.body.absender,
        zeit: req.body.zeit,
    };

    if (!chatId) { return res.status(400).json({ msg: "Id for chat identification missing." }) }

    if (!newMessage.text) {
        return res.status(400).json({ msg: "Please include a Message." })
    }
    var output = file.process(file.push('./data/chats/' + chatId + ".json",newMessage,"messages"),res)
    console.log(output)
    if(output.code==200){
        res.status(200);
    } else{
        res.status(577);
        console.log("Weird error occured");
    }

})


module.exports = router;