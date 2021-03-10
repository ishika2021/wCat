let fs=require("fs");
function isFile(dirpath){
    try {
        let res=fs.lstatSync(dirpath);
        return res.isFile();
    } catch (error) {
        return false
    }
}
function viewFileContent(dirpath){
    let data=fs.readFileSync(dirpath,{encoding:'utf8', flag:'r'});
    console.log(data);
}
function view(dirpath){
    let res=isFile(dirpath);
    if(res==true){
        viewFileContent(dirpath);
    }else{
        console.log("File doesn't exists");
    }
}

module.exports={
    viewFn:view
}