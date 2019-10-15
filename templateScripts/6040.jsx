function tmplt6040(){

var idsetd = charIDToTypeID( "setd" );
    var desc19980 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref25 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idfsel = charIDToTypeID( "fsel" );
        ref25.putProperty( idChnl, idfsel );
    desc19980.putReference( idnull, ref25 );
    var idT = charIDToTypeID( "T   " );
        var desc19981 = new ActionDescriptor();
        var idTop = charIDToTypeID( "Top " );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc19981.putUnitDouble( idTop, idPxl, 242.000000 );
        var idLeft = charIDToTypeID( "Left" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc19981.putUnitDouble( idLeft, idPxl, 322.000000 );
        var idBtom = charIDToTypeID( "Btom" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc19981.putUnitDouble( idBtom, idPxl, 2856.000000 );
        var idRght = charIDToTypeID( "Rght" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc19981.putUnitDouble( idRght, idPxl, 2433.000000 );
    var idElps = charIDToTypeID( "Elps" );
    desc19980.putObject( idT, idElps, desc19981 );
    var idFthr = charIDToTypeID( "Fthr" );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc19980.putUnitDouble( idFthr, idPxl, 15.000000 );
    var idAntA = charIDToTypeID( "AntA" );
    desc19980.putBoolean( idAntA, true );
executeAction( idsetd, desc19980, DialogModes.NO );

//~ // =======================================================
//~ var idinvokeCommand = stringIDToTypeID( "invokeCommand" );
//~     var desc19982 = new ActionDescriptor();
//~     var idcommandID = stringIDToTypeID( "commandID" );
//~     desc19982.putInteger( idcommandID, 1018 );
//~     var idkcanDispatchWhileModal = stringIDToTypeID( "kcanDispatchWhileModal" );
//~     desc19982.putBoolean( idkcanDispatchWhileModal, true );
//~ executeAction( idinvokeCommand, desc19982, DialogModes.NO );

// =======================================================
var idInvs = charIDToTypeID( "Invs" );
executeAction( idInvs, undefined, DialogModes.NO );

// =======================================================
var idDlt = charIDToTypeID( "Dlt " );
executeAction( idDlt, undefined, DialogModes.NO );

// =======================================================
//~ var idinvokeCommand = stringIDToTypeID( "invokeCommand" );
//~     var desc19983 = new ActionDescriptor();
//~     var idcommandID = stringIDToTypeID( "commandID" );
//~     desc19983.putInteger( idcommandID, 1016 );
//~     var idkcanDispatchWhileModal = stringIDToTypeID( "kcanDispatchWhileModal" );
//~     desc19983.putBoolean( idkcanDispatchWhileModal, true );
//~ executeAction( idinvokeCommand, desc19983, DialogModes.NO );


var idsetd = charIDToTypeID( "setd" );
    var desc40 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref3 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idfsel = charIDToTypeID( "fsel" );
        ref3.putProperty( idChnl, idfsel );
    desc40.putReference( idnull, ref3 );
    var idT = charIDToTypeID( "T   " );
    var idOrdn = charIDToTypeID( "Ordn" );
    var idNone = charIDToTypeID( "None" );
    desc40.putEnumerated( idT, idOrdn, idNone );
executeAction( idsetd, desc40, DialogModes.NO );
    
    }