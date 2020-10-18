const fs = require('fs');
var helpers = {};
const express = require('express');

var api = express();

//api.listen(3034);

helpers.read = (fileName) => {
    try {
        ergebnis = JSON.parse(fs.readFileSync(fileName));
    }
    catch (err) {
        return {
            data: {},
            msg: "Internal error occured",
            description: 'Error during file loading '+err,
            code: 500
        }
    }
    return {
        data: ergebnis,
        code: 200
    }
}

helpers.push = (fileName,object)=>{
    try {
        ergebnis = JSON.parse(fs.readFileSync(fileName));
    }
    catch (err) {
        return {
            data: {},
            msg: "Internal error occured",
            description: 'Error during file loading '+err,
            code: 500
        }
    }

    console.log(ergebnis);
    ergebnis.push(object);

    try{
        fs.writeFileSync(fileName,JSON.stringify(ergebnis, null, "\t"));
    } catch (err){
        console.log("Second error made")
        return {
            data: {},
            msg: "Internal error occured",
            description: 'Error during file rewriting '+err,
            code: 500
        }
    }

    return {
        data: ergebnis,
        code: 200
    }
}

helpers.push = (fileName,object,sub)=>{
    try {
        ergebnis = JSON.parse(fs.readFileSync(fileName));
    }
    catch (err) {
        return {
            data: {},
            msg: "Internal error occured",
            description: 'Error during file loading '+err,
            code: 500
        }
    }
    ergebnis[sub].push(object);

    try{
        fs.writeFileSync(fileName,JSON.stringify(ergebnis, null, "\t"));
    } catch (err){
        return {
            data: {},
            msg: "Internal error occured",
            description: 'Error during file rewriting '+err,
            code: 500
        }
    }
    return {
        code: 200
    }
}


helpers.process = (out, res)=>{
    if (out.code == 200) {
        if(out.data){return out.data}
        return out
    }
    else {
        console.log(out.description);
        res.status(out.code).json({ msg: out.msg })
        return
    }
}

//Test API
api.get('/*',(req,res)=>{
    var messages = helpers.process(helpers.read("./data.json"),res,this);
    
    output = helpers.process(helpers.push("./data.json",{msg:"This is message number: "+messages.length}),res)
    if(!output){return}
    res.status(200).json(output);
})


module.exports = helpers;