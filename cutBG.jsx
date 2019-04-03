function newBlkLayer(docAct){
    blkLayer = docAct.artLayers.add();
    blkLayer.name = "BlackLayer";
    app.backgroundColor.rgb.blue = 0;
    app.backgroundColor.rgb.green = 0;
    app.backgroundColor.rgb.red = 0;
    docAct.selection.selectAll(blkLayer);
    docAct.selection.fill (app.backgroundColor);
    docAct.selection.deselect();
    return (blkLayer);
   
    }

function moveLayer(actLayer, blkLayer){
    blkLayer.move (actLayer, ElementPlacement.PLACEAFTER);
    
    }

function visibleLayers(actLayer, visible){
    for(l=0;l<app.activeDocument.artLayers.length;l++){
            app.activeDocument.artLayers[l].visible=visible;
        }
    
    
    }
function main(){
    docAct = app.activeDocument;
    actLayer = app.activeDocument.activeLayer;
  
  try{
        blkLayer = docAct.artLayers.getByName ("BlackLayer");
        blkLayer.remove();
        docAct.activeLayer = actLayer;
        visibleLayers (actLayer, true);
        
        }catch(e){ 
      
    visibleLayers (actLayer,false);
    actLayer.visible=true;
    blkLayer = newBlkLayer (docAct);
    moveLayer (actLayer, blkLayer);
    app.activeDocument.activeHistoryBrushSource=app.activeDocument.historyStates.getByName ("Изменение имени");
   docAct.activeLayer = actLayer;
  //---------------------------------------------------------------------------------------------------------------------- 
var idslct = charIDToTypeID( "slct" );
    var desc6 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref2 = new ActionReference();
        var idquickSelectTool = stringIDToTypeID( "quickSelectTool" );
        ref2.putClass( idquickSelectTool );
    desc6.putReference( idnull, ref2 );
executeAction( idslct, desc6, DialogModes.NO );

// =======================================================
var idautoCutout = stringIDToTypeID( "autoCutout" );
    var desc7 = new ActionDescriptor();
    var idsampleAllLayers = stringIDToTypeID( "sampleAllLayers" );
    desc7.putBoolean( idsampleAllLayers, false );
executeAction( idautoCutout, desc7, DialogModes.NO );   
   
     }
    }


main()