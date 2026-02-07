let time = 5;
let timer;

function openLoading(){
    document.getElementById("loadingOverlay").style.display="flex";

    time = 5;
    document.getElementById("countdown").innerText =
        "You will be redirected in 5 seconds";

    timer = setInterval(()=>{
        time--;
        document.getElementById("countdown").innerText =
            "You will be redirected in " + time + " seconds";

        if(time <= 0){
            goToSuccess();
        }
    },1000);
}

function goToSuccess(){
    clearInterval(timer);
    document.getElementById("loadingOverlay").style.display="none";
    document.getElementById("successPage").style.display="flex";
}
