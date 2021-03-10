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
    let nol=1;
    if(cmd=="-s"){
        sFn(dirpath,"-b");
    }else{
        for(let line in lines){
            if(lines[line]=='\r'){
                console.log(lines[line]);
            }else{
                console.log(nol+" "+lines[line]);
                nol++;
            }
        }
    }
}
function b(dirpath,cmd){
    let res=isFile(dirpath);
    if(res==true){
        viewFileContent(dirpath,cmd);
    }else if(res==false){
        console.log("No such file exists");
    }
}

module.exports={
    bFn:b
}