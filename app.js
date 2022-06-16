const containerDiv = document.querySelector(".container");
const par = document.querySelector(".time");

function digitalClock () {
    let dateTime = new Date();
    let clock = dateTime.toLocaleTimeString();
    console.log(clock);
    par.innerText = clock;
};

setInterval(digitalClock, 1000);