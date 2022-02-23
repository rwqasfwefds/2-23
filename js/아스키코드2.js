// 혼자 함

// window.onload = function(){
//     let a = prompt('문자를 입력하세요');
//     let b = prompt('문자를 입력하세요');
    
//     let result = "";
//     let result2 = "";

//     for(let x = a; x <= b; x++){
//         result = x.charCodeAt[x]
//         result2 = result + 1;
//         document.querySelector('result').innerHTML += String.fromCharCode(result2)
//     }
// }

window.onload = function(){
    let word = prompt('문자를 입력해 주세요.').split(" ");
    let fLetter = word[0].charCodeAt(0); // a => 67
    let sLetter = word[1].charCodeAt(0); // f => 73

    for(let i =fLetter; i <= sLetter; i++){ // a와 f가 숫자로 변환되어 있는중
        document.querySelector('#result').innerHTML += String.fromCharCode(i) // fromCharCode = 숫자를 다시 문자로 변환시켜 주는 새끼
    }
}