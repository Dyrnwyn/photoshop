function saveAsPsd(fullPth){    //функция переименования и сохранения psd фаила под новым именем
  
    app.activeDocument.saveAs (new File(fullPth.substring (0, fullPth.length-4)+"_НЕ ПОД ШАБЛОН.psd"))
    }

function saveAsJpg(q, objectName){   //функция экспорта активного документа в JPG фаил
    var jpegOption = new JPEGSaveOptions();
    jpegOption.quality =q;
     fullPth =decodeURI (app.activeDocument.fullName);
    app.activeDocument.saveAs (new File (fullPth.substring (0, fullPth.length-4) + "_"+  objectName + ".psd"), jpegOption );
    }

function removeFile(fullPth){
        flName= new File (fullPth);
        try{
        flName.remove();
        }catch(e){
            alert("Фаил уже удален")
            }
    }

function main(){
    q=3; // Качество сохранения JPG фото
    app.displayDialogs = DialogModes.NO;  // не показывать диалогов
    fullPth =decodeURI (app.activeDocument.fullName) ; // получение полного пути к фаилу
    i = fullPth.split("/");
    objectName = i[i.length - 2];
    //alert (objectName)
   // saveAsPsd (fullPth);
   // removeFile (fullPth);
   saveAsJpg (q, objectName);
    }


main()
