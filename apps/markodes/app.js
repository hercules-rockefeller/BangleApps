var barcode;

// read settings file, or if it doesn't exist use {}
var settings = require('Storage').readJSON("markodes.json", true) || {};
var barcode = settings.code1 || 'NO CODE'; // default
delete settings; // remove settings from memory



g.clear();
g.setFontAlign(0,0);
g.setFont("Vector",80);
g.drawString(barcode, 120, 120);
Bangle.setLCDPower(1);


/*
Raw text	
29065020225959
Raw bytes	
(Not applicable)
Barcode format	CODABAR
Parsed Result Type	TEXT
Parsed Result	
29065020225959
*/