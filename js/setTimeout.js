function startTimeout (){
    setTimeout(printCurrentDate, 2000);
}

function printCurrentDate (){
    document.getElementById('date').innerHTML = new Date();
}
