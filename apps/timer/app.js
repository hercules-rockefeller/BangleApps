var counter;
var counterInterval;

// read settings file, or if it doesn't exist use {}
var settings = require('Storage').readJSON("timer.json", true) || {};
var maxCounter = settings.startat || 11; // default to 11
delete settings; // remove settings from memory

function outOfTime() {
  if (counterInterval) return;
  
  E.showMessage("Push button to Reset", "Out of Time");
  Bangle.buzz()
    .then(() => new Promise(resolve => setTimeout(resolve,300)))
    .then(() => Bangle.buzz());
  setTimeout(outOfTime, 2000);
}

function countDown() {
 counter--;
  if(counter<=0) {
    clearInterval(counterInterval);
    counterInterval = undefined;
    setWatch(startTimer, (process.env.HWVERSION==2) ? BTN1 : BTN2);
    outOfTime();
    return;
  }
  
  g.clear();
  g.setFontAlign(0,0);
  g.setFont("Vector",80);
  g.drawString(counter, 120, 120);
  Bangle.setLCDPower(1);
}


function startTimer() {
  counter = maxCounter;
  countDown();
  if (!counterInterval)
    counterInterval = setInterval(countDown, 1000);

}

startTimer();

