try{
masck = app.activeDocument.artLayers.getByName ("ClippingMask");
masck = true;
}catch(e){
        masck=false;
    }

if (masck){
    clpMsk = app.activeDocument.artLayers.getByName ("ClippingMask");
    clpMsk.merge();
}else{
    mainLayer = app.activeDocument.activeLayer.name;
    clpMsk =  app.activeDocument.artLayers.add();
    clpMsk.name = "ClippingMask";
    clpMsk.move (app.activeDocument.artLayers.getByName (mainLayer), ElementPlacement.PLACEBEFORE);
    clpMsk.grouped = true;
    }