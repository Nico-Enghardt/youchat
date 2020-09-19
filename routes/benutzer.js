const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const fs = require('fs');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const secrets = require('./Modules/token-secrets');
const tokenSecrets = require('./Modules/token-secrets');


/* GET users listing. */
router.get('/',  (req, res, next) => {
  fs.readFile('./data/benutzer.json', (err, data) => {
    if (err || !data) {
      res.status(500).json({ msg: "Internal Error. Will be fixed soon." })
      return console.log("Error while loading user database:", err);
    } 

    const privateUsers = JSON.parse(data);

    var publicUsers;
    //@Todo Hash und Id müssen entnommen werden
    res.status(200).json(privateUsers);

  })
});

//Creating new User
router.post('/', (req, res) => {
  var newMember = {
    id: uuid.v4(),
    name: req.body.name,
    hash: hash(req.body.password),
  };

  if (!newMember.name) {
    return res.status(400).json({ msg: "Please include a username." })
  }


  if (!newMember.hash) {
    return res.status(400).json({ msg: "Password was not sent or too short." })
  }

  fs.readFile('./data/benutzer.json', (err, data) => {
    if (err || !data) {
      res.status(500).json({ msg: "Internal Error. Will be fixed soon." })
      return console.log("Error while loading user database:", err);
    }

    var users = JSON.parse(data);
    users.push(newMember);

    var usersString = JSON.stringify(users, null, "\t");

    fs.writeFile('./data/benutzer.json', usersString, (err) => {

      if (err) {
        console.log('Error while writing to users database:', err)
        return res.status(500).json({ msg: "Internal Error. Will be fixed soon." })
      }
      else { res.json({ msg: "User successfully created" }) }
    })

  })

});

//Login Post Function
router.post("/login", (req, res) => {
  var loginData = {
    name: req.body.name,
    hashedPassword: hash(req.body.password),
  }

  fs.readFile("./data/benutzer.json", (err, data) => {
    if (err) {
      console.log('Error while reading user Database:', err);
      return res.status(500).json({ msg: "Internal Error. Will be fixed soon." });
    }
  
    users = JSON.parse(data);

    const user = users.find(user => user.name == loginData.name);

    console.log(user);
    console.log(loginData);

    if(loginData.hashedPassword==user.hash){
      console.log("Succesfully authenticated.");
      console.log(process.env.ACCESS_TOKEN_SECRET);

      const accessToken = jwt.sign(user,secrets.ACCESS_TOKEN_SECRET)

      res.json({"accessToken":accessToken})
    }


  })

})

module.exports = router;

//Function to authenticate the Tokens
function authenticateToken(req,res,next){
  const authHeader = req.headers['authorization'];
  const token = authHeader && autHeader.split(' ')[1];
  if(token == null){
    return res.status(401).send("Token is missing or incomplete.");
  }

  jwt.verify(token,secrets.ACCESS_TOKEN_SECRET,(err,user)=>{
    if(err) return res.sendStatus(403).send("Token is invalid.")
  })

  next();
}

// Hash Function
hash = function (password) {
  if (typeof (password) == 'string' && password.length > 0) {
    var hash = crypto.createHmac('sha256', "Yosoy uncomputadora.").update(password).digest('hex');
    return hash;
  } else {
    return false;
  }
};

logErr = function (error, process) {
  if (err) {
    console.log("An error occured during", process, ":", err);
    res.status(500).json({ "msg": "Internal error. Will be fixed soon." })
  }
  return false;
}