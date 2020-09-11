var express = require('express');
var router = express.Router();
var uuid = require('uuid');
var fs = require('fs');
var crypto = require('crypto');

router.get('/', function (req, res, next) {
  console.log("1")
  fs.readFile('./data/nachrichten.json', (err, data) => {
    if (err) { 
      console.log("Error occured during reading message file:",err);
      return res.status(500).json({msg:"Interal Error. Will be fixed soon."})
    }
    
    allmessages = JSON.parse(data);
    res.status(200).json(allmessages);
  })
});

console.log("2")
router.post('/', (req, res) => {
  var newMessage = {
    text: req.body.message,
    absender: req.body.absender,
    id: uuid.v4(),
  };
  console.log(req.body.message)

  if (!newMessage.text) {
    return res.status(400).json({ msg: "Please include a Message." })
  }

  fs.readFile('./data/nachrichten.json', (err, data) => {
    if (err || !data) {
      res.status(500).json({ msg: "Internal Error. Will be fixed soon." })
      return console.log("Error while loading messages database:", err);
    }

    var messages = JSON.parse(data);
    messages.push(newMessage);

    var messagesString = JSON.stringify(messages, null, "\t");
    console.log("3")
    fs.writeFile('./data/nachrichten.json', messagesString, (err) => {
      console.log("hi")
      if (err) {
        console.log('Error while writing to messages database:', err)
        res.status(500).json({ msg: "Internal Error. Will be fixed soon." })
      }
      else { res.json({ msg: "Message successfully created" }) }
      console.log("Message created")
    })
    console.log("4")

  })

});

module.exports = router;


hash = function (password) {
  if (typeof (password) == 'string' && password.length > 0) {
    var hash = crypto.createHmac('sha256', "Yosoy uncomputadora.").update(password).digest('hex');
    return hash;
  } else {
    return false;
  }
};