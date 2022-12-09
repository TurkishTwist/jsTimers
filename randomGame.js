function randomGame(){
    let tally = 0;
    let rand = setInterval(function(){
        var num = Math.random();
        if (num < '0.75'){
            console.log(num);
            tally += 1;
        }
        else {
            console.log('Total random numbers less than .75 generated: ' + tally)
            clearInterval(rand);
        }
    }, 1000)
}

const max = 1;

randomGame()