#target photoshop



function delArtLayer (name){
    try{
        var  LayerForDel = app.activeDocument.artLayers.getByName (name);
        LayerForDel.remove();
        }catch(e){
                   alert ("Видимо слой уже удален")
            }
    }

function opacity (name){
            var LayerOpacity = app.activeDocument.artLayers.getByName (name);
            LayerOpacity.opacity=40;
    }


function main(){
    var FileName = app.activeDocument.name;
    Shablon = FileName.split("_");
    
    switch (Shablon[2]){
  //--------------------------------------1000 шаблоны---------------------------------------      
 //----------------------------------------2000---------------------------------------------------       
        case    "2069":
            delLayer = "БУКЕТ_2069";
            fillOp = "Слой 3";
            delArtLayer (delLayer);
            opacity(fillOp);
//---------------------------------------------4000-----------------------------------------------
//-----------------------------------------------5000---------------------------------------------
//------------------------------------------------6000---------------------------------------------
//------------------------------------------------------7000----------------------------------------
 
 }

}

main();