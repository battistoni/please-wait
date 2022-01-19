$(document).ready(function(){
    var timeValueSec = sessionStorage.getItem("timingSec");
    var timeValueMin = sessionStorage.getItem("timingMin");
    // console.log(timeValueMin + ':' + timeValueSec)
    $('.time-value').text(timeValueMin + ':' + timeValueSec)

    var entertainment = sessionStorage.getItem('entertained');
    console.log(entertainment)
    if (entertainment === 'true') {
        $('.entertain-res').text('yes')
        sessionStorage.setItem('entertained', 'false');
        var sas = sessionStorage.getItem('entertained')
        console.log(sas)
    }
    else {
        $('.entertain-res').text('no')
        console.log('no')
    }

    var height = $('.result-parallax').get(0).getBoundingClientRect();
    $('.main').css('top', height.height)
})

$('.answer').click(function(){
    $('.gif').css('display', 'block')
})