(function(back) {
    var FILE = "markodes.json";
    // Load settings
    var settings = Object.assign({
      something: 123,
    }, require('Storage').readJSON(FILE, true) || {});
  
    function writeSettings() {
      require('Storage').writeJSON(FILE, settings);
    }
  
    // Show the menu
    E.showMenu({
      "" : { "title" : "MarKode Settings" },
      "< Back" : () => back(),
      'Code': {
        value: 29065020225959|settings.code1,
        onchange: v => {
          settings.code2 = v;
          writeSettings();
        }
      },
    });
  })