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

function testVid(Shablon){
        if ((Shablon[1] == "Копилка 158")|| 
      (Shablon[1] == "Брелок 58")|| 
      (Shablon[1] == "Открывашка 58")|| 
      (Shablon[1] == "Зеркало 75")|| 
      (Shablon[1] == "Значок 75")|| 
      (Shablon[1] == "Значок 100")|| 
      (Shablon[1] == "Значок 158")||
      (Shablon[1] == "Кружка-термос с крышкой") ){
        
     }else {
                if (Shablon[0]==""){
                            alert("не указан Вид изделия")
                    }
         }
    }


function main(){
       
       try{
            var docName = app.activeDocument.name;            
        } 
        catch(e){
            alert ("Ни один фаил не открыт");
            }
        
       Shablon = docName.split ("_");
       testVid (Shablon);
       if (Shablon[1]=="Настенный календарь"){
                alert ("Настенный календарь");
                app.activeDocument.guides.add (Direction.HORIZONTAL, UnitValue(275,"px"));
       }
       else{
                app.activeDocument.guides.add (Direction.HORIZONTAL, UnitValue(175,"px"));
             }
          
        switch (Shablon[2]){
//~  //--------------------------------------------------------------------0000-----------------------------------------------------------------------------           
//~          case "0002": break;
//~          case "0004":delLayer ("_IMGP8447"); break;
//~                
//~ //---------------------------------------------------------------------1000------------------------------------------------------------------------------       
          case "1214": moveLayer ("childrenLayer", "Слой 29 копия", "PLACEAFTER");break;
//~          case "1301": delLayer ("Ребенок")  ; break;  
//~          case "1302": delLayer ("childrenLayer");break;
//~          case "1303": delLayer ("Место")  ; break;  
//~          case "1308": delLayer ("Место")  ; break;  
//~          case "1309": delLayer ("Место")  ; break;  
//~          case "1312": delLayer ("Место")  ; break;  
//~          case "1316": delLayer ("Место")  ; break; // поместить ребенка между слоями 1-1, опустить на 2 слоя ниже
//~          case "1318": delLayer ("childrenLayer");break;
//~          case "1319": break;
//~          case "1320": delLayer ("Место");break;
//~          case "1321": break;
//~          case "1323":delLayer ("Место"); break;
//~          case "1324":delLayer ("Место"); break;
//~          case "1403": delLayer ("Место");break;
//~          case "1404": delLayer ("childrenLayer");break;
//~          case "1408": delLayer ("childrenLayer");break;
//~          case "1410": break;
//~          case "1413":delLayer ("childrenLayer") break;
//~          case "1414":delLayer ("childrenLayer"); break;
//~          case "1415": delLayer ("childrenLayer"); changeOpacity ("131_166_151-154_168"); moveLayer ("131_166_151-154_168", "1", "PLACEAFTER");break;//поднять на 1 слой вверх меч
//~          case "1416": delLayer ("Место");break;
//~          case "1417":delLayer ("Ребенок");break;
           case "1503":moveLayer ("Слой 2 копия", "Облако", "PLACEBEFORE");break;
//~          case "1504": delLayer ("childrenLayer");break;
//~          case "1505": delLayer ("childrenLayer");break;
//~          case "1506": delLayer ("childrenLayer");break;
//~          case "1507": delLayer ("childrenLayer");break;
//~          case "1508": delLayer ("childrenLayer");break;
//~          case "1509": delLayer ("Место");break;
//~          case "1512": delLayer ("childrenLayer");break;
//~          case "1515": delLayer ("childrenLayer");break;
//~          case "1518": delLayer ("childrenLayer");break;
//~          case "1520": delLayer ("Место");break;
//~          case "1522": delLayer ("Место");break;
//~          case "1523": delLayer ("место");break;
//~          case "1525":delLayer ("childrenLayer"); break;
//~          case "1526":delLayer ("childrenLayer"); break;
//~          case "1528":delLayer ("Место");delLayer ("Слой 43");moveLayer ("Слой 65", "Слой 44 копия", "PLACEAFTER"); break;
//~          case "1530": delLayer ("childrenLayer"); break;
//~          case "1601": delLayer ("childrenLayer"); break;
//~          case "1602": delLayer ("childrenLayer"); break;
//~          case "1603": delLayer ("childrenLayer"); break;
//~          case "1604": delLayer ("childrenLayer"); break;
//~          case "1608": delLayer ("Место");break;
//~          case "1613": delLayer ("Место"); delLayer ("Удали этот слой");break;
//~          
//~             
//~ //----------------------------------------------------------------------2000-----------------------------------------------------------------------------
//~           case "2012":delLayer ("Место"); break; 
//~           case "2013":delLayer ("childrenLayer"); break;
//~           
//~           case "2014":break;
//~           case "2015":delLayer ("childrenLayer"); break;
//~           case "2016":delLayer ("childrenLayer"); break;
//~           case "2018":delLayer ("childrenLayer"); break;
//~           case "2019": delLayer ("childrenLayer"); break;
//~           case "2020": delLayer ("childrenLayer"); break;
//~           case "2021": delLayer ("childrenLayer"); break;
//~           case "2022": break;
//~           case "2024": break;
//~           case "2028":delLayer ("Место");moveLayer ("Корзина", "1", "PLACEAFTER") ; break;
            case "2029": moveLayer ("childrenLayer", "1", "PLACEAFTER"); break;
//~           case "2032": delLayer ("childrenLayer"); break;
//~           case "2033": delLayer ("childrenLayer"); break;
//~           case "2034": delLayer ("childrenLayer"); break;
//~           case "2035": break;
//~           case "2036":delLayer ("childrenLayer"); break;
//~           case "2038":delLayer ("childrenLayer"); break;
//~           case "2039":delLayer ("childrenLayer"); break;
//~           case "2042":delLayer ("childrenLayer"); break;
//~            case "2046":delLayer ("Место"); break;
//~           case "2057":delLayer ("Ребенок"); delLayer ("Слой 10"); break;
//~          
//~           case "2058":delLayer ("Место"); break;
//~           case "2060":delLayer ("Место"); break;
//~           case "2065":delLayer ("childrenLayer"); break;
//~           case "2068":delLayer ("Место");  setVisible ("слить с ребенком") ;break;
//~           case "2069":delLayer ("Место"); delLayer ("ШУБКА_2069"); moveLayer ("317117_1196516004", "Слой 1", "PLACEAFTER") ;break;
//~           case "2071":delLayer ("Место"); break;
//~           case "2101":delLayer ("Место"); break;
//~           case "2103":delLayer ("Место"); break;
//~           case "2202":delLayer ("childrenLayer"); break;
//~           case "2203":delLayer ("childrenLayer"); break;
//~           case "2206":delLayer ("Место"); break;
//~           case "2401":delLayer ("Место"); break;
//~           case "2403":delLayer ("Место"); break;
//~           case "2404":delLayer ("Место"); break;
//~           
//~ //----------------------------------------------------------------------4000-----------------------------------------------------------------------------
//~            case "4002":delLayer ("childrenLayer"); break;  
//~           case "4003":delLayer ("Место"); break;  
//~           
//~           case "4004":delLayer ("childrenLayer"); break;  
//~           case "4006":delLayer ("childrenLayer"); break;  
//~           case "4008": break;
//~           case "4009": break;
//~           case "4013":moveLayer ("Layer 7", "Layer 14", "PLACEAFTER");moveLayer ("Layer 5", "Layer 14", "PLACEAFTER"); break;
//~           case "4015":moveLayer ("Layer 54", "Слой 46", "PLACEAFTER");moveLayer ("Layer 54 copy", "Слой 46", "PLACEAFTER"); break;
//~           case "4014":delLayer ("childrenLayer"); break;
//~           case "4019":delLayer ("Место"); setVisible ("Кривые 6 копия 2"); changeOpacity ("Кривые 6 копия 2"); break;
//~           case "4021": break;
//~           case "4022": delLayer ("childrenLayer"); changeOpacity ("Слой 1"); changeOpacity ("Слой 1 копия"); break;
//~           case "4024": delLayer ("childrenLayer");moveLayer ("Call OF Duty", "1", "PLACEAFTER");break;      
//~           case "4025": delLayer ("childrenLayer"); break;      
//~           case "4026": delLayer ("childrenLayer"); break;
//~           case "4027": moveLayer("Layer 68", "Layer 75 copy 10", "PLACEBEFORE") ; break;
//~           case "4028":delLayer ("childrenLayer"); break;
//~           case "4030":delLayer ("childrenLayer"); break;
           case "4033": moveLayer ("Layer 76", "Layer 77", "PLACEAFTER"); break;
//~           case "4034":delLayer ("childrenLayer"); break;
//~           case "4037":delLayer ("childrenLayer"); break;
//~           case "4038":delLayer ("Место"); break;
//~           case "4039":delLayer ("Место"); setVisible ("4039_"); setVisible ("Слой 1"); moveLayer ("4039_", "Слой 1", "PLACEBEFORE"); changeOpacity ("Слой 1"); changeOpacity ("4039_"); break;
//~ //----------------------------------------------------------------------5000-----------------------------------------------------------------------------
//~         case "5003":delLayer ("childrenLayer"); break;
//~             case "5017":delLayer ("Место"); break;
//~           case "5021": break;
//~           case "5022":delLayer ("Место"); break;
//~           case "5023":delLayer ("Место");changeOpacity ("5023"); break;
//~           case "5025":delLayer ("Место"); break;
//~           case "5027":delLayer ("childrenLayer"); break;
//~           case "5029":delLayer ("_MG_7781"); break;
//~           case "5039": break;
//~           case "5043":delLayer ("Место"); break;
//~           case "5045":delLayer ("Место"); break;
//~           
//~ //----------------------------------------------------------------------6000-----------------------------------------------------------------------------
//~           case "6001":delLayer ("childrenLayer"); break;
//~           case "6002":delLayer ("childrenLayer"); break;
//~           case "6003":delLayer ("childrenLayer"); break;
//~           case "6004":delLayer ("childrenLayer"); break;
//~           case "6005":delLayer ("childrenLayer"); break;
//~           case "6006":delLayer ("Место"); delLayer ("Удали этот слой"); moveLayer ("Слить с ребенком", "1 пустой", "PLACEAFTER"); break;
//~           case "6012":delLayer ("childrenLayer"); break;
//~           case "6013":delLayer ("childrenLayer"); break;
//~           case "6015":delLayer ("childrenLayer"); break;
//~           case "6018":delLayer ("childrenLayer"); break;
//~           case "6019":delLayer ("childrenLayer"); break;
//~           case "6021":delLayer ("childrenLayer"); break;
//~           case "6024":delLayer ("childrenLayer"); break;
//~           case "6025":delLayer ("Место"); break;
//~           case "6026":delLayer ("Место"); changeOpacity ("6026");break;
//~           case "6027":delLayer ("childrenLayer"); changeOpacity ("6026");break;
//~           case "6028":delLayer ("childrenLayer"); break;
//~           case "6029":delLayer ("childrenLayer");break;
//~           case "6030":delLayer ("childrenLayer");break;
//~           case "6031":delLayer ("childrenLayer");break;
//~           case "6032":delLayer ("childrenLayer");break;
//~           case "6033":break;
//~           case "6034":delLayer ("childrenLayer");break;
//~           case "6035":delLayer ("childrenLayer");break;
//~           case "6036":delLayer ("childrenLayer");break;
//~           case "6048":delLayer ("childrenLayer");break;
//~           case "6050":delLayer ("childrenLayer");break;
//~           

//~ //----------------------------------------------------------------------7000-----------------------------------------------------------------------------
//~           case "7004":delLayer ("childrenLayer");break;
//~           case "7013":delLayer ("Место");break;
            case "7014": moveLayer (app.activeDocument.activeLayer.name, "Место", "PLACEBEFORE") ;break;
//~           case "7015":delLayer ("Место");break;
//~           case "7016":break;
           case "7017":moveLayer ("childrenLayer", "гагрина", "PLACEBEFORE"); break;
//~           case "п001":delLayer ("childrenLayer"); moveLayer ("нижняя резинка", "верхняя резинка", "PLACEAFTER"); moveLayer ("синий", "верхняя резинка", "PLACEAFTER");break;
//~         case "ф002":delLayer ("Место");break;
//~        
//~        
//~        
//~        default :alert ("Шаблон не прописан");
        }
        }
   

main()

