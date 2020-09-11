var express = require('express');
var router = express.Router();
var uuid = require('uuid');
var fs = require('fs');
var crypto = require('crypto');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/',(req,res)=>{
  var newMember = {
    id: uuid.v4(),
    name: req.body.name,
    hash: hash(req.body.password),
  };

  if(!newMember.name){
    return res.status(400).json({msg: "Please include a username."})
  } 


  if(!newMember.hash){
    return res.status(400).json({msg: "Password was not sent or too short."})
  }

  fs.readFile('./data/users.json',(err,data)=>{
    if(err||!data){
      res.status(500).json({msg:"Internal Error. Will be fixed soon."})
      return console.log("Error while loading user database:",err);
    }

    var users = JSON.parse(data);
    users.push(newMember);

    var usersString = JSON.stringify(users,null,"\t" );

    fs.writeFile('./data/users.json', usersString, (err)=>{
      
      if(err){
        console.log('Error while writing to users database:',err)
        res.status(500).json({msg:"Internal Error. Will be fixed soon."})
      }
      else{res.json({msg:"User successfully created"})}
    })

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