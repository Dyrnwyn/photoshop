function typeDetect(tpName){
    var listTpName = ["20x30","Настенный календарь"];
    for(var i=0;i<listTpName.length;i++){
            tpNameReg = new RegExp (listTpName[i]);
            if(tpNameReg.test(tpName)){
               return false; 
               }
        }
        return true;
}


function changeResolution(){
    app.activeDocument.resizeImage (undefined, undefined, 300);
}

function main(){
    flName = app.activeDocument.name;
    if (typeDetect (flName)){
            changeResolution();
        }
    
    }

main()