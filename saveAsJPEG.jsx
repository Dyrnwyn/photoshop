function saveAsPsd(fullPth){    //функция переименования и сохранения psd фаила под новым именем
    app.activeDocument.saveAs (new File(fullPth.substring (0, fullPth.length-4)+"_НЕ ПОД ШАБЛОН.psd"))
    }

function saveAsJpg(q){   //функция экспорта активного документа в JPG фаил
    var jpegOption = new JPEGSaveOptions();
    jpegOption.quality =q;
    app.activeDocument.saveAs (new File (decodeURI (app.activeDocument.fullName)), jpegOption )
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
    saveAsPsd (fullPth);
    removeFile (fullPth);
    saveAsJpg (q);
    }


main()

//~ var dlg = new Window("dialog", "Alert Box Builder");
//~ dlg.msgPnl = dlg.add("panel", undefined, "Messages");
//~ dlg.msgPnl.titleSt = dlg.msgPnl.add("statictext", undefined,"Alert box title:");
//~ dlg.msgPnl.msgSt = dlg.msgPnl.add("statictext", undefined,"Alert message:");
//~ dlg.location = [0,1000];
//~ dlg.onShow = function(){this.hide();}
//~ dlg.show();



//setTimeout(clWin (dlg),1000);


