window.onload = function(){
    let n = prompt('문자열을 입력하세요.');

   document.getElementById('result').innerHTML = n.indexOf('t')+1 + " " + Number(n.lastIndexOf('t')+1) 
}




     // 답안
// window.onload = function(){
//     let word = prompt('문자열을 입력해 주세요.');
//     let pos = word.indexOf('t') + 1;
//     let lastPos = word.lastIndexOf('t') + 1;

//     document.write(pos + " " + lastPos);
// }
