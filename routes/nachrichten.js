var express = require('express');
var router = express.Router();
var uuid = require('uuid');
var fs = require('fs');

const func= require('./Modules/functions')


// Get all messages in the messages file
router.get('/', function (req, res, next) {
  fs.readFile('./data/nachrichten.json', (err, data) => {
    if (err) { 
      console.log("Error occured during reading message file:",err);
      return res.status(500).json({msg:"Interal Error. Will be fixed soon."})
    }
    
    allmessages = JSON.parse(data);
    res.status(200).json(allmessages);
  })
});

// Send a message
router.post('/', (req, res) => {
  var newMessage = {
    text: req.body.text,
    absender: req.body.absender,
    zeit: req.body.zeit,
  };

  if (!newMessage.text) {
    return res.status(400).json({ msg: "Please include a Message." })
  }

  fs.readFile('./data/nachrichten.json', (err, data) => {
    if (err || !data) {
      res.status(500).json({ msg: "Internal Error. Will be fixed soon." })
      return console.log("Error while loading messages database:", err);
    }

    var messages = JSON.parse(data);
    newMessage.id = messages.length;
    messages.push(newMessage);

    var messagesString = JSON.stringify(messages, null, "\t");
    fs.writeFile('./data/nachrichten.json', messagesString, (err) => {
      if (err) {
        console.log('Error while writing to messages database:', err)
        res.status(500).json({ msg: "Internal Error. Will be fixed soon." })
      }
      else { res.json({ msg: "Message successfully created" }) }
      console.log("Message created")
    })

  })

});

module.exports = router;

