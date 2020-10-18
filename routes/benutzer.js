const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const fs = require('fs');
const file = require('./Modules/files')
const jwt = require('jsonwebtoken');
const secrets = require('./Modules/token-secrets');
const tokenSecrets = require('./Modules/token-secrets');
const func = require('./Modules/functions')

/* GET users listing. */
router.get('/', (req, res, next) => {
  var nutzer = file.process(file.read('./data/benutzer.json'),res);
  if(!nutzer){return}
  
  var publicUsers = [];

  for (user of nutzer) {
    publicUsers.push({
      name: user.name,
      id: user.id
    })
  }

  return res.json(publicUsers);

  //console.log(thisuser);
  // @Todo want to mark the own user Object.

  fs.readFile('./data/benutzer.json', (err, data) => {
    if (err || !data) {
      res.status(500).json({ msg: "Internal Error. Will be fixed soon." })
      return console.log("Error while loading user database:", err);
    }

    const privateUsers = JSON.parse(data);

    var publicUsers = [];

    for (user of privateUsers) {
      publicUsers.push({
        name: user.name,
        id: user.id
      })
    }

    res.status(200).json(publicUsers);

  })
});

router.get('/theirchats*', (req, res, next) => {
  const requestedUser = req.query.id;

  if (!requestedUser) {
    return res.status(407).send("You need to specify the user-id.")
  }

  var allUsers = file.process(file.read('./data/benutzer.json'),res);
  var user = allUsers.find(user => { return requestedUser == user.id })
  console.log(user);

  for(chat of user.chats){
    console.log(chat.id);
    chat.name = file.process(file.read('./data/chats/'+chat.id + '.json'),res).name;
  }

  if (user && user.chats) {
    var hisChats = user.chats;
    return res.json(hisChats);

  } else {
    res.status(405).json({mgs:"User could not be found in the user database."});
    return console.log("User was not found in database.");
  }

})

//Creating new User
router.post('/register', (req, res) => {
  var newMember = {
    id: uuid.v1(),
    name: req.body.name,
    hash: func.hash(req.body.password),
    chats: [],
  };

  if (!newMember.name) {
    return res.status(400).json({ msg: "Please include a username." })
  }

  if (!newMember.hash) {
    return res.status(400).json({ msg: "Password was not sent or too short." })
  }

  return file.process(file.push('./data/benutzer.json',newMember),res);
  


});

//Login Function
router.post("/login", (req, res) => {
  var loginData = {
    name: req.body.name,
    hashedPassword: func.hash(req.body.password),
  }

  var allUsers  = file.process(file.read("./data/benutzer.json"),res);
  if(!allUsers){return}

  const user = users.find(user => user.name == loginData.name);

  if(loginData.hashedPassword != user.hash){return res.status(400).json({msg:"Password is wrong."})}
  
  const accessToken = jwt.sign(user, secrets.ACCESS_TOKEN_SECRET)
  return res.json({ "accessToken": accessToken })

  fs.readFile("./data/benutzer.json", (err, data) => {
    if (err) {
      console.log('Error while reading user Database:', err);
      return res.status(500).json({ msg: "Internal Error. Will be fixed soon." });
    }

    users = JSON.parse(data);

    const user = users.find(user => user.name == loginData.name);

    console.log(user);
    console.log(loginData);

    if (loginData.hashedPassword == user.hash) {
      console.log("Succesfully authenticated.");

      const accessToken = jwt.sign(user, secrets.ACCESS_TOKEN_SECRET)

      res.json({ "accessToken": accessToken })
    }


  })

})

module.exports = router;
