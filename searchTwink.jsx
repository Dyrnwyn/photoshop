//Данная версия скрипта работает только с изделиями типа обычной фото, для кружек, зеркал, брелков и подобного не подходит

function getPath(){  //функция получения пути к рабочей директории
        return decodeURI (app.activeDocument.path);
         }
 //функция возвращает имя шаблона 
function getShablon(flName){
     return flName[2];
    }

//функция возвращает имя фото
function getPhoto(flName){
     return flName[3];
    }
// Функция проверки расширения файла, если psd возвращаем true, иначе false/
function psdDetect(flName){ 
    flExt = flName.substring (flName.length-3, flName.length);
    if (flExt == "psd"){
            return true;
        }
    else{
            return false;
        }
    }
// функция проверки не являеться ли файл другим видом шаблона.
function typeDetect(tpName){
    var listTpName = ["Копилка 158","Брелок 58","Открывашка 58","Зеркало 75", "Значок 75","Значок 100","Значок 158","Кружка-термос с крышкой"];
    for(var i=0;i<listTpName.length;i++){
            tpNameReg = new RegExp (listTpName[i]);
            if(tpNameReg.test(tpName)){
               return false; 
               }
        }
        return true;
}

//функция создания списка фаилов, которые можно использовать в качестве копии для активного документа.
function searchTwinkPhoto(phName,shName, tpName,workingPth){
    var listTwinks = new Array;
    phNameRe = new RegExp ("\\w*"+"_"+phName+"_"+"\\w*");
    shNameRe = new RegExp ("\\w*"+shName+"\\w*");
    actvDocName = new RegExp ("\\w*"+app.activeDocument.name+"\\w*");// проверяем, не являеться ли проверяемый файл, открытым документом
    listFiles = Folder (workingPth).getFiles ("*.psd");
    
    for (var i=0;i<listFiles.length;i++){
        decodeFl = decodeURI (listFiles[i]);
        if(typeDetect (decodeFl) && psdDetect (decodeFl) && phNameRe.test(decodeFl) && shNameRe.test(decodeFl) &&  !(actvDocName.test(decodeFl))  ){
                                       listTwinks.push(decodeFl);                            
        }
    
    }
return listTwinks;
}



function main(){
   mainName=app.activeDocument.name;
   fullMainName=decodeURI (app.activeDocument.fullName) ;
   workingPth = getPath();
   flName = app.activeDocument.name.split("_");
   phName = getPhoto (flName);
   shName = getShablon (flName);
   tpName = flName[1].toString();
   listTwinks = searchTwinkPhoto (phName, shName, tpName,workingPth);
   if (listTwinks.length>0){
   copyPhoto = confirm ("Изделие с  шаблоном "+shName + " и кадром "+phName+" уже сверстанно.\n Заменить уже готовым из файла "+listTwinks[0]+" ?");
   if (copyPhoto){
       app.activeDocument.close ();
       rmFl = new File(fullMainName);
       rmFl.remove();
       open (File (listTwinks[0]));
       flToClose = app.activeDocument.name;
       app.activeDocument.duplicate (mainName);
       fl = app.documents.getByName (flToClose);
        fl.close(SaveOptions.DONOTSAVECHANGES);
        app.activeDocument.saveAs (File (fullMainName));
       }      
        }

    }

main()