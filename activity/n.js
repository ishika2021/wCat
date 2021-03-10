let fs=require("fs");
let {sFn}=require("./s");

function isFile(dirpath){
    try {
        let res=fs.lstatSync(dirpath);
        return res.isFile();
    } catch (error) {
        return false;
    }
}

function viewFileContent(dirpath,cmd){
    let data=fs.readFileSync(dirpath).toString();
    let lines=data.split('\n');
    if(cmd=="-s"){
        sFn(dirpath,"-n");
    }else{
        let nol=1;
        for(let line in lines){
        console.log(nol+" "+lines[line]);
        nol++;
        }
    }
}
function n(dirpath,cmd){
    let res=isFile(dirpath);
    if(res==true){
        viewFileContent(dirpath,cmd);
    }else if(res==false){
        console.log("File doesn't exists");
    }
}

module.exports={
    nFn:n
}