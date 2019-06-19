count = 0;
workingPth = Folder.selectDialog (prompt);
listFiles = Folder (workingPth).getFiles ("*.psd");
   for (var i=0;i<listFiles.length;i++){
       fullName =  listFiles[i];
       actia = decodeURI ( listFiles[i]).split ("_");
       actia2 = new RegExp ( "Акция 2"+"\\w*");
       if (actia2.test(actia[1])){
           flActia =  File (fullName);           
           flActia.copy (actia[0]+"п_20х30_"+actia[2]+"_"+actia[3]+"_"+"1_"+actia[5]+"_"+actia[6]);
           flActia.copy (actia[0]+"п_10х15_"+actia[2]+"_"+actia[3]+"_"+"1_"+actia[5]+"_"+actia[6]);
           count = count +2;
           }
       
       switch (actia[1]){
       case "Акция 1":
           flActia =  File (fullName);           
           flActia.copy (actia[0]+"п_20х30_"+actia[2]+"_"+actia[3]+"_"+"1_"+actia[5]+"_"+actia[6]);
            flActia.copy (actia[0]+"о_20х30_"+actia[2]+"_"+actia[3]+"_"+"1_"+actia[5]+"_"+actia[6]);
            flActia.copy (actia[0]+"п_15х20_"+actia[2]+"_"+actia[3]+"_"+"2_"+actia[5]+"_"+actia[6]);
            count = count +4;
       break;
       
//~        case "Акция 2": 
//~            flActia =  File (fullName);           
//~            flActia.copy (actia[0]+"п_20х30_"+actia[2]+"_"+actia[3]+"_"+"1_"+actia[5]+"_"+actia[6]);
//~            flActia.copy (actia[0]+"п_10х15_"+actia[2]+"_"+actia[3]+"_"+"1_"+actia[5]+"_"+actia[6]);
//~            count = count +2;
//~        break;
       
       case "Акция 3":
         flActia =  File (fullName);
          flActia.copy (actia[0]+"п_15х20_"+actia[2]+"_"+actia[3]+"_"+"1_"+actia[5]+"_"+actia[6]);
            flActia.copy (actia[0]+"о_15х20_"+actia[2]+"_"+actia[3]+"_"+"1_"+actia[5]+"_"+actia[6]);
            count = count +2;
       break;
       }
     
       }
   alert ("Готово. Количество фото  "+count);
 