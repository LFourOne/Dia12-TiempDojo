function loadingCity(){
    alert("Loading weather report")
}

function closeCookies(element){
    let removeCookies = document.querySelector(".cookies-footer")
    removeCookies.remove()
}

function changeDegrees(element){
    let option = element.value;
    let temp = document.querySelectorAll('.degrees')
    if(option === "f"){
        for(let i = 0; i < temp.length; i++){
            let degrees = temp[i].innerText;
            let finalDegrees = (degrees * 1.8) + 32;
            temp[i].innerText = Math.round(finalDegrees);
        }
    }
    else{
        for(let i = 0; i < temp.length; i++){
            let degrees = temp[i].innerText;
            let finalDegrees = (degrees - 32) / 1.8;
            temp[i].innerText = Math.round(finalDegrees);
        }
    }
}