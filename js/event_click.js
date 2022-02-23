window.onload = function(){
    let cup = document.querySelector('#cup')
    cup.onclick = function(event){
        document.querySelector('#container').innerHTML = ('이벤트 유형 : ' + event.type + ',이벤트 위치 : ' + event.pageX + "," + event.pageY);
    }
}