var min = 0
var sec = 0
var msec = 0
var minhead=document.getElementById("min")
var sechead=document.getElementById("sec")
var msechead=document.getElementById("msec")
 var interval;

function timer(){
    msec++
  msechead.innerHTML = msec
  if(msec >= 100){
    sec++
    msec = 0
    sechead.innerHTML = sec 
  }else if (sec >= 10){
      min++
      minhead.innerHTML= min
      sec = 0
  }
}
function start(){
interval = setInterval(timer,10)
}

function pause(){
    clearInterval(interval)
}
function reset(){
    min = 0
    sec = 0 
    msec = 0
    msechead.innerHTML = 0
    minhead.innerHTML = 0
    sechead.innerHTML = 0
    stop();
}