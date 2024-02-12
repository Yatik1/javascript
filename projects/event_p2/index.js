
//generate random hexCode

const randomColor = function() {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i=0;i<6;i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}


let intervalId;

const startChangingColor = function() {
    
    function changeBg() {
        document.body.style.backgroundColor = randomColor()
    }

    if(!intervalId) {
        intervalId = setInterval(changeBg  ,1000)
        // console.log(!intervalId); 
    }
    
}

const stopChangingColor = function() {
    clearInterval(intervalId)
    intervalId = null    // optimized
 }

document.getElementById("start").addEventListener("click" , startChangingColor)
document.getElementById("stop").addEventListener("click" , stopChangingColor)