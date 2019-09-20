function tmplt4030(){
//~     var idslct = charIDToTypeID( "slct" );
//~     var desc173 = new ActionDescriptor();
//~     var idnull = charIDToTypeID( "null" );
//~         var ref3 = new ActionReference();
//~         var idquickSelectTool = stringIDToTypeID( "quickSelectTool" );
//~         ref3.putClass( idquickSelectTool );
//~     desc173.putReference( idnull, ref3 );
//~ executeAction( idslct, desc173, DialogModes.NO );

// =======================================================
//~ var idmodalStateChanged = stringIDToTypeID( "modalStateChanged" );
//~     var desc174 = new ActionDescriptor();
//~     var idLvl = charIDToTypeID( "Lvl " );
//~     desc174.putInteger( idLvl, 1 );
//~     var idStte = charIDToTypeID( "Stte" );
//~     var idStte = charIDToTypeID( "Stte" );
//~     var identer = stringIDToTypeID( "enter" );
//~     desc174.putEnumerated( idStte, idStte, identer );
//~     var idkcanDispatchWhileModal = stringIDToTypeID( "kcanDispatchWhileModal" );
//~     desc174.putBoolean( idkcanDispatchWhileModal, true );
//~ executeAction( idmodalStateChanged, desc174, DialogModes.NO );

// =======================================================
//~ var idmodalStateChanged = stringIDToTypeID( "modalStateChanged" );
//~     var desc175 = new ActionDescriptor();
//~     var idLvl = charIDToTypeID( "Lvl " );
//~     desc175.putInteger( idLvl, 0 );
//~     var idStte = charIDToTypeID( "Stte" );
//~     var idStte = charIDToTypeID( "Stte" );
//~     var idexit = stringIDToTypeID( "exit" );
//~     desc175.putEnumerated( idStte, idStte, idexit );
//~     var idkcanDispatchWhileModal = stringIDToTypeID( "kcanDispatchWhileModal" );
//~     desc175.putBoolean( idkcanDispatchWhileModal, true );
//~ executeAction( idmodalStateChanged, desc175, DialogModes.NO );

// =======================================================
//~ var idinvokeCommand = stringIDToTypeID( "invokeCommand" );
//~     var desc176 = new ActionDescriptor();
//~     var idcommandID = stringIDToTypeID( "commandID" );
//~     desc176.putInteger( idcommandID, 2970 );
//~     var idkcanDispatchWhileModal = stringIDToTypeID( "kcanDispatchWhileModal" );
//~     desc176.putBoolean( idkcanDispatchWhileModal, true );
//~ executeAction( idinvokeCommand, desc176, DialogModes.NO );

// =======================================================
var idCpTL = charIDToTypeID( "CpTL" );
executeAction( idCpTL, undefined, DialogModes.NO );

// =======================================================
var idautoCutout = stringIDToTypeID( "autoCutout" );
    var desc177 = new ActionDescriptor();
    var idsampleAllLayers = stringIDToTypeID( "sampleAllLayers" );
    desc177.putBoolean( idsampleAllLayers, false );
executeAction( idautoCutout, desc177, DialogModes.NO );

// =======================================================
var idslct = charIDToTypeID( "slct" );
    var desc178 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref4 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        ref4.putName( idLyr, "Слой 173" );
    desc178.putReference( idnull, ref4 );
    var idMkVs = charIDToTypeID( "MkVs" );
    desc178.putBoolean( idMkVs, false );
    var idLyrI = charIDToTypeID( "LyrI" );
        var list2 = new ActionList();
        list2.putInteger( 815 );
    desc178.putList( idLyrI, list2 );
executeAction( idslct, desc178, DialogModes.NO );
    
    }