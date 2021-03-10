let fs=require("fs");
let path=require("path");
function isFile(dirpath){
    try {
        let res=fs.lstatSync(dirpath);
        return res.isFile();
    } catch (error) {
        return console.log("No such file exists");
    }
}
function viewFileContent(dirpath){
    //console.log(path.basename(dirpath)+"is a file");
    let data=fs.readFileSync(dirpath,{encoding:'utf8', flag:'r'});
    console.log(data);
    
}
function listContentOfDir(dirpath){
    return fs.readdirSync(dirpath);
}
function view(dirpath){
    let res=isFile(dirpath);
    if(res==true){
        viewFileContent(dirpath);
    }else if(res==false){
        let content=listContentOfDir(dirpath);
        //console.log(content);
        for(let i=0;i<content.length;i++){
            let child=path.join(dirpath,content[i]);
            view(child);
        }
    }
}

module.exports={
    viewFn:view
}