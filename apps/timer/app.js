var counter = 10;
var counterInterval;

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
  counter = 10;
  countDown();
  if (!counterInterval)
    counterInterval = setInterval(countDown, 1000);

}

startTimer();

