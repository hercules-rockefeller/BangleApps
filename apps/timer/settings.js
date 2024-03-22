(function(back) {
    var FILE = "timer.json";
    // Load settings
    var settings = Object.assign({
      something: 123,
    }, require('Storage').readJSON(FILE, true) || {});
  
    function writeSettings() {
      require('Storage').writeJSON(FILE, settings);
    }
  
    // Show the menu
    E.showMenu({
      "" : { "title" : "Mark Timer Settings" },
      "< Back" : () => back(),
      'repeat forever?': {
        value: !!settings.onoroff,  // !! converts undefined to false
        onchange: v => {
          settings.onoroff = v;
          writeSettings();
        }
      },
      'Start countdown at': {
        value: 10|settings.startat,  // 0| converts undefined to 0
        min: 10, max: 30,
        onchange: v => {
          settings.startat = v;
          writeSettings();
        }
      },
    });
  })