// wCat is a clone of cat command available in bash but not in windows cmd.

// It is used to display or make a copy content of one or more files in the terminal 
// General Syntax:
// wcat [options] [files]
// option to remove big line break (-s)
// option to add line number to non empty lines (-b)
// option to add line numbers to all lines (-n) 
// Commands:
// 1- node wcat.js filepath => displays content of the file in the terminal   DONE
// 2- node wcat.js filepath1 filepath2 filepath3... => displays content of all files in the terminal(contactinated form) in the given order. DONE
// 3- node wcat.js -s filepath => convert big line breaks into a singular line break DONE
// 4- node wcat -n filepath => give numbering to all the lines DONE
// 5- node wcat -b filepath => give numbering to non-empty lines DONE
// We can mix and match the options. DONE

// Edge cases
// 1- If file entered is not found then it gives file does not exist error. DONE
// 2- -n and -b are 2 options which are mutually exclusive so if user types both of them together only the first enter option should work. DONE

let fs=require("fs");
let {viewFn}=require("./activity/view");
let {sFn}=require("./activity/s");
let {nFn}=require("./activity/n");
let {bFn}=require("./activity/b");

function checkDir(dirpath){
    return fs.existsSync(dirpath);
}
let input=process.argv.slice(2);//to slice down node wcat.js
    let cmd=input[0];
    
    if(checkDir(cmd)==true){
        for(let i=0;i<input.length;i++){
            viewFn(input[i]);     
      }
    }else{
        switch(cmd){
            case "-s": {    if(checkDir(input[1])==true)
                                sFn(input[1],"");
                            else if(checkDir(input[2])==true)
                                sFn(input[2],input[1]);
                            else
                                console.log("Extra command is entered");
                            break;
                        }
            case "-n": {    if(checkDir(input[1])==true)
                                nFn(input[1],"");
                            else if(checkDir(input[2])==true)
                                nFn(input[2],input[1]);
                            else
                                console.log("Extra command is entered");
                            break;
                        }
            case "-b": {   if(checkDir(input[1])==true)
                                bFn(input[1],"");
                            else if(checkDir(input[2])==true)
                                bFn(input[2],input[1]);
                            else
                                console.log("Extra command is entered");
                            break;
                        }
            default:     console.log("Wrong command");
            }
        }

