fullPth =decodeURI (app.activeDocument.fullName) ; //путь к открытому файлу
 app.displayDialogs = DialogModes.NO; // не показывать диалоговых окон


function setVisibleLayers(){
      for (var i = 0; i < app.activeDocument.artLayers.length; i++){
        CurLayer = app.activeDocument.layers[i];
        CurLayer.visible = true;
    
    }
}

function setUnvisibleLayers(){
      for (var i = 0; i < app.activeDocument.artLayers.length; i++){
        CurLayer = app.activeDocument.layers[i];
        CurLayer.visible = false;    
      }
}

function saveAsPng(fileName){
    var option = PNGSaveOptions;
    option.compression = 2;
    fl = new File (fullPth.substring (0, fullPth.length - 4) + "_" + fileName);
    app.activeDocument.saveAs (fl, option);
    
    }

function main(){
    
    for (var i = 1; i < app.activeDocument.artLayers.length; i++){
        setUnvisibleLayers ()
        CurLayer = app.activeDocument.layers[i];
        CurLayer.visible = true;
        if (app.activeDocument.layers[i].name != "childrenLayer")
        {
            saveAsPng (i + ".png")
        } 
        else
        {
            saveAsPng (i + "_" + app.activeDocument.layers[i].name + ".png")
         }
    
    }
}

main()