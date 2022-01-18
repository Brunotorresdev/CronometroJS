var sec = 00;

var min = 00;

var hra = 00;

var interva

function start() {
   interval = setInterval(time,1000);
}

function pause() {
    clearInterval(interval)
    
}

function stop() {
    clearInterval(interval)
    sec = 00
    min = 00
    document.querySelector('#cr').innerText= '00:00:00'
}

function time(){
    sec++
    if (sec == 60){
        min ++;
        sec = 0;
        if (min == 60){
            min = 0;
            hra ++;
        }
    }
    document.querySelector('#cr').innerText= hra + ':' +min + ':' +sec;
}