actL = app.activeDocument.activeLayer;
actLN = app.activeDocument.activeLayer.name;
actL.duplicate (actL, ElementPlacement.PLACEAFTER);
actL.merge();