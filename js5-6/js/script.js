 	var ms=0,ss=0,mm=0,hh=0;
 	hhDisplay=0,
    mmDisplay=0,
    ssDisplay=0,
    msDisplay=0;
	var timerId;
	var showTime;
	var startButton = document.getElementById('startButton');
    var resetButton = document.getElementById('resetButton');
    var stopButton = document.getElementById('stopButton');
    span = document.getElementsByTagName('span');

timerStart = function(){

   timerId = setInterval(timerFunction, 4);
    startButton.textContent = 'Pause';
    startButton.removeEventListener('click', timerStart);
    startButton.addEventListener('click', timerPause);
  }
  timerPause = function(){
  clearInterval(timerId);
  startButton.textContent = 'Continue';
   startButton.removeEventListener('click', timerPause);
   startButton.addEventListener('click', timerStart);
   }
  timerReset = function () {
   clearInterval(timerId);
   startButton.textContent = 'Start';
   startButton.removeEventListener('click', timerPause);
   startButton.addEventListener('click', timerStart);
 
            hh = 0;
            mm = 0;
            ss = 0;
            ms = 0;
            hhDisplay=0;
    		mmDisplay=0;
    		ssDisplay=0;
    		msDisplay=0;
    span[0].innerHTML = '00';
    span[1].innerHTML = '00';
    span[2].innerHTML = '00';
    span[3].innerHTML = '0';        
 }
 
  timerFunction = function(){
   ms+=4;
    if (ms >= 1000) {
      ms=0;
      ss++;
    
      if (ss == 60) {
        ss = 0;
        mm++;
        if (mm == 60) {
          mm = 0;
          hh++;
          if (hh == 100) {

            hh = 0;
            mm = 0;
            ss = 0;
            ms = 0;
          }
        }
      }
    }
   if (hh<10) { hhDisplay='0'+hh} else {hhDisplay=hh};
      if (mm<10) { mmDisplay='0'+mm} else {mmDisplay=mm};
      if (ss<10) { ssDisplay='0'+ss} else {ssDisplay=ss};
      if (ms<100) {
        if (ms<10) {msDisplay='00'+ms}
          else {msDisplay='0'+ms}}
            else {msDisplay=ms};
    showTime = hhDisplay + ':' + mmDisplay + ':' + ssDisplay + '.' + msDisplay;
    console.log ( showTime );
    span[0].innerHTML = hhDisplay;
    span[1].innerHTML = mmDisplay;
    span[2].innerHTML = ssDisplay;
    span[3].innerHTML = msDisplay;
 


}
  
  startButton.addEventListener('click', timerStart);
  resetButton.addEventListener ('click', timerReset);
  