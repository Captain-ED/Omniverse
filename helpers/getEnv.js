const fs = require("fs");
const path = require('path');



function setEnv(env){
    let [key, value] = env.split("=");
    console.log({key, value})
    process.env[key.trim()] = value.trim();
}

const env = {
    config: () => {
        const filePath = path.join("./", ".env");
        const fileContent = fs.readFileSync(filePath, {encoding: "utf-8"});
        console.log({filePath, fileContent});
        if(fileContent.trim() === "") return;
        let envs = process.platform === 'windows' ? fileContent.split("\r\n") : fileContent.split("\n");
        console.log(this);
        for(let env of envs){
            if(env.trim() !== "") setEnv(env.trim());
            else continue;
        }
    },
}





module.exports = env;