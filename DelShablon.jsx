#target photoshop
function delLayer(name){
        layerName = app.activeDocument.artLayers.getByName (name);
        layerName.remove();
    }

function changeOpacity(name){
     layerName = app.activeDocument.artLayers.getByName (name);
     layerName.opacity = 40;
        
    }
 //функция перемещения слоя, в параметрах передаем имя слоя который надо переместить layerToMove
//  имя слоя, относительно которого расположить перемещаемый слой layerNoMove, и позицию
// PLACEAFTER и PLACEBEFORE
function moveLayer(layerToMove, layerNoMove, position ){                                                                                                                      
     layerName = app.activeDocument.artLayers.getByName (layerToMove); 
     switch  (position){ 
        case "PLACEBEFORE" : layerName.move (app.activeDocument.artLayers.getByName (layerNoMove), ElementPlacement.PLACEBEFORE);  break ;  
        case "PLACEAFTER" :  layerName.move (app.activeDocument.artLayers.getByName (layerNoMove), ElementPlacement.PLACEAFTER);   break;           
        }
    }


function setVisible(name){
       layerName = app.activeDocument.artLayers.getByName (name);
       layerName.visible = true;
    }



function main(){
        try{
            var docName = app.activeDocument.name;            
        } catch(e){
            alert ("Ни один фаил не открыт")
            }
        Shablon = docName.split ("_")
        switch (Shablon[2]){
 //--------------------------------------------------------------------0000-----------------------------------------------------------------------------           
         case "0002": break;
               
//---------------------------------------------------------------------1000------------------------------------------------------------------------------       
         case "1301": delLayer ("Ребенок")  ; break;  
         case "1316": delLayer ("Место")  ; break; // поместить ребенка между слоями 1-1, опустить на 2 слоя ниже
         case "1319": break;
         case "1320": delLayer ("Место");break;
         case "1403": delLayer ("Место");break;
         case "1410": break;
         case "1415": delLayer ("childrenLayer"); changeOpacity ("131_166_151-154_168"); break;//поднять на 1 слой вверх меч
         case "1416": delLayer ("Место");break;
         case "1417":delLayer ("Ребенок");break;
         case "1507": delLayer ("childrenLayer");break;
         case "1512": delLayer ("childrenLayer");break;
         case "1520": delLayer ("Место");break;
         case "1523": delLayer ("место");break;
         case "1525":delLayer ("childrenLayer"); break;
         case "1530":break;
         
            
//----------------------------------------------------------------------2000-----------------------------------------------------------------------------
          case "2014":break;
          case "2016":delLayer ("childrenLayer"); break;
          case "2019": break;
          case "2022": break;
          case "2024": break;
          case "2035": break;
          case "2036":delLayer ("childrenLayer"); break;
          case "2039":delLayer ("childrenLayer"); break;
          case "2042":delLayer ("childrenLayer"); break;
          case "2057":delLayer ("Ребенок"); break;
          case "2068":delLayer ("Место");  setVisible ("слить с ребенком") ;break;
          case "2071":delLayer ("Место"); break;
          case "2101":delLayer ("Место"); break;
          case "2203":delLayer ("childrenLayer"); break;
          case "2206":delLayer ("Место"); break;
          
//----------------------------------------------------------------------4000-----------------------------------------------------------------------------
          case "4008": break;
          case "4009": break;
          case "4014":delLayer ("childrenLayer"); break;
          case "4019":delLayer ("Место"); setVisible ("Кривые 6 копия 2"); changeOpacity ("Кривые 6 копия 2"); break;
          case "4021": break;
          case "4022": delLayer ("childrenLayer"); changeOpacity ("Слой 1"); changeOpacity ("Слой 1 копия"); break;
          case "4026": delLayer ("childrenLayer"); break;
          case "4027": moveLayerBefore("Layer 68", "Layer 75 copy 10") ; break;
          case "4028":delLayer ("childrenLayer"); break;
          case "4030":delLayer ("childrenLayer"); break;
          case "4034":delLayer ("childrenLayer"); break;
          case "4038":delLayer ("Место"); break;
          case "4039":delLayer ("Место"); setVisible ("4039_"); setVisible ("Слой 1"); moveLayer ("4039_", "Слой 1", "PLACEBEFORE"); changeOpacity ("Слой 1"); changeOpacity ("4039_"); break;
//----------------------------------------------------------------------5000-----------------------------------------------------------------------------
//----------------------------------------------------------------------6000-----------------------------------------------------------------------------
//----------------------------------------------------------------------7000-----------------------------------------------------------------------------
       default :alert ("Шаблон не прописан");
        }
        
    }

main()

