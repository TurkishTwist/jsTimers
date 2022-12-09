function countDown(number){
    let num = setInterval(function(){
        number--;
        if (number <= 0){
            clearInterval(num)
            console.log("DONE!")
        }
        else {
            console.log(number)
        }
        
    }, 1000)
}


countDown(6)