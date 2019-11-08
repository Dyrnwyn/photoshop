var dlg = new Window("dialog", "Загрузка JPG", undefined, {closeButton:true});

function getPath(){  //функция получения пути к рабочей директории
        return decodeURI (app.activeDocument.path);
         }

function addJpeg(){
        flName = app.activeDocument.name;
        flPath = decodeURI (app.activeDocument.fullName);
        photoName = flName.split("_")[3];
        pth = getPath ();
        jpgFl = 
        
    }


function main(){
dlg.panel = dlg.add("panel", undefined,"Введите номер кадра");
dlg.panel.txtFlName = dlg.panel.add("EditText", undefined, "Загрузить");
dlg.panel.btnOk = dlg.panel.add("button", undefined, "Загрузить",{name:'ok'});
dlg.panel.btnCancel = dlg.panel.add("button", undefined, "Выход",{name:'cancel'});
dlg.show();

dlg.panel.btnOk.onClick = addJpeg ();
}


main ()