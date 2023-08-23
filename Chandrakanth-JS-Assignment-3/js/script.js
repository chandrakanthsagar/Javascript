
var totalseconds = 0;
var istimerstartoff = false;
var countdownid;
const stopwatch = () => {
    if (totalseconds > 0) {
        totalseconds--;
        updateTimer();
    } else {
        clearInterval(countdownid);
        alert("Time Up...!");
        istimerstartoff = false;
    }
};
function setTimer(){
    const days = parseInt(document.getElementById('days').value) || 0;
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    var seconds = parseInt(document.getElementById('seconds').value) || 0;

    totalseconds = days * 86400 + hours * 3600 + minutes * 60 + seconds;
    console.log("hi");
    updateTimer();

};

function updateTimer() {
    const days = Math.floor(totalseconds / 86400);
    const hours = Math.floor((totalseconds % 86400) / 3600);
    const minutes = Math.floor((totalseconds % 3600) / 60);
    const seconds = totalseconds % 60;
//padStart method to add sufficient zeros to the value
    document.getElementById('Displaydays').value = String(days).padStart(2, '0');
    //In summary, use innerHTML when you want to work with the HTML content inside an element that contains markup (e.g., for text-based elements like div, p, span). 
    //Use .value when you want to work with the value of form elements like input, textarea, or select. 
    //It is crucial to use innerHTML cautiously, especially with user-generated content, to avoid security risks..
    //The innerHTML property is used to get or set the HTML content of an element, mainly for elements that contain markup, 
    //such as div, span, p, etc. When you use innerHTML, 

    document.getElementById('Displayhour').value = String(hours).padStart(2, '0');
    document.getElementById('Displayminutes').value = String(minutes).padStart(2, '0');
    document.getElementById('Displayseconds').value = String(seconds).padStart(2, '0');
}
function StartTimer(){
    console.log("hiii");
if(!istimerstartoff && totalseconds>0){
    if(totalseconds>0){
        istimerstartoff = true;
            countdownid = setInterval(stopwatch,1000);
    }
    
    
}
}
function PauseTimer(){
    console.log("pause");
    clearInterval(countdownid);
    istimerstartoff = false;
};
function ResetTimer(){
    console.log("reset");
    clearInterval(countdownid);
    istimerstartoff = false;
    totalseconds = 0;
    updateTimer();
};

