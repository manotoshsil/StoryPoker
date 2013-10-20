function flipFlop(e) {
	
	//var animation = require('alloy/animation');
	//animation.shake($.three,200, function(){ alert('it worfks');});
	
	
	//$.three.zIndex=10;
	//$.three.width = Ti.UI.;
	//$.three.height = 788;
	 $.three.animate({
	 	
            left : 250,
            duration : 300,
            width : 900,
            height : 500,
            zIndex :10
            
        });
        toggle = true;
	
	//Titanium.UI.createAlertDialog({title:'Image View', message:'You clicked ' + arguments[0].source.widgetId}).show();
}

$.index.open();
