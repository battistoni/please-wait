// setTimeout(function(){
//   $('.pressed').hide()
// }, 1000)



// "use strict";
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;
$(document).ready(function(){
  start()
})

function start() {
  pause();
  cron = setInterval(() => { timer(); }, 100);
}

function pause() {
  clearInterval(cron);
}

function reset() {
  minute = 0;
  second = 0;
  millisecond = 0;
//   document.getElementById('minute').innerText = '00';
//   document.getElementById('second').innerText = '00';
//   document.getElementById('millisecond').innerText = '000';
}

function timer() {
  if ((millisecond += 100) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  var timingSec = returnData(second)
  // console.log(timingSec)
  sessionStorage.setItem("timingSec", timingSec);
  
  var timingMin = returnData(minute)
  // console.log(timingMin)
  sessionStorage.setItem("timingMin", timingMin);


  
//   console.log(timeValue);
//   document.getElementById('minute').innerText = returnData(minute);
//   document.getElementById('second').innerText = returnData(second);
//   document.getElementById('millisecond').innerText = returnData(millisecond);
}

function returnData(input) {
    return input > 9 ? input : `0${input}`
}


$('.too-long').on('click', function(){
    pause()
})

setTimeout(function(){
    setInterval(function(){
        var dot = $('.dot')
        $(dot).first().removeClass('black')
    },400)
}, 1000)

$('.entertain').on('click', function(){
    $('.gif').css('display', 'block')
    sessionStorage.setItem('entertained', 'true')
    var sas = sessionStorage.getItem('entertained')
    console.log(sas)
})