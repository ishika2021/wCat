let fs = require("fs");
function isFile(dirpath) {
    try {
        let res = fs.lstatSync(dirpath);
        return res.isFile();
    } catch (error) {
        return false;
    }
}
function viewFileContent(dirpath, cmd) {
    let data = fs.readFileSync(dirpath).toString();
    let lines = data.split('\n');
        let c=0;
        let nol=1;
        for(line in lines){
            if (lines[line] == "\r") {
                c++;
            } else {
                if(c>0){
                    c=0; 
                    (cmd=="-n")?console.log(nol++):console.log();
                }
                (cmd=="")?console.log(lines[line]):console.log(nol+++" "+lines[line]);
            }
        }
}

function s(dirpath, cmd) {
    let res = isFile(dirpath);
    if (res == true) {
        viewFileContent(dirpath, cmd);
    } else{
        console.log("File doesn't exists");
    }
}

module.exports = {
    sFn: s
}