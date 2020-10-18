var crypto = require('crypto');

const allfunctions ={};

// Hash function which returns false in case that the password is not existent or of lenght 0.
allfunctions.hash = function (password) {
    if (typeof (password) == 'string' && password.length > 0) {
      var hash = crypto.createHmac('sha256', "Yosoy uncomputadora.").update(password).digest('hex');
      return hash;
    } else {
      return false;
    }
  };

//Function to authenticate the Tokens
allfunctions.authenticateToken = function(req, res, next) {
  const authHeader = req.headers['authorization'];
  console.log(authHeader);
  
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.status(401).send("Token is missing or incomplete.");
  }

  jwt.verify(token, secrets.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) { return res.sendStatus(403).send("Token is invalid."); }
    req.thisuser = user;
    console.log("Token was successfully authenticated.")
    next();
  })


}

module.exports =  allfunctions;