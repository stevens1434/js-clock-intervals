







// document.addEventListener('DOMContentLoaded', function() {
// 	//code goes here

// var secondHand = document.getElementById('second');
// var minuteHand = document.getElementById('minute');
// var hourHand = document.getElementById('hour');


// var el = document.getElementById('second');
//     // var dos = document.getElementById("minute");
//     var degrees = 0;

//     var secHand = setInterval(function(){
//         degrees= degrees+10;
//         el.style.transform = "rotate(" + degrees + "deg)";
//         // console.log("kasdjflkjasdf");
//     },100);

// var el1 = document.getElementById('minute');
//     // var dos = document.getElementById("minute");
//     var degrees = 0;

//     var minHand = setInterval(function(){
//         degrees= degrees+1;
//         el1.style.transform = "rotate(" + degrees + "deg)";
//         // console.log("kasdjflkjasdf");
//     },500);

// var el3 = document.getElementById('hour');
// 	// var dos = document.getElementById("minute");
// 	var degrees = 0;

// 	var minHand = setInterval(function(){
// 	    degrees= degrees+.001;
// 	    el3.style.transform = "rotate(" + degrees + "deg)";
// 	    // console.log("kasdjflkjasdf");
// 	},1000);


// })











document.addEventListener('DOMContentLoaded', function() {
	//code goes here


var secondHand = document.getElementById('second');
var minuteHand = document.getElementById('minute');
var hourHand = document.getElementById('hour');


function secHand(){
    var counter = 0;
    setInterval(function(){
        counter+=6;
        secondHand.style.transform = "rotate(" + counter + "deg)";
    }, 6);
}

function minHand(){
    var counter = 0;
    setInterval(function(){
        counter+=6;
        minuteHand.style.transform = "rotate(" + counter + "deg)";
    }, 60);
}

function hrHand(){
    var counter = 0;
    setInterval(function(){
        counter+=30;
        hourHand.style.transform = "rotate(" + counter + "deg)";
    }, 600);
}

secHand();
minHand();
hrHand();


})