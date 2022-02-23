// let a = prompt('문자열을 입력하세요.');
// let b = prompt('문자열을 입력하세요.');


// for(let i = 0; i < a.length; i++){
//     document.write(a[i].charCodeAt(86))
// }

// for(let t = 0; i < b.length; t++){
//     document.write(b[i].charCodeAt(76))
// }

window.onload = function(){
    let word = prompt('문자열을 입력하세요.');

    let result = " ";
    let result2 = " ";
    let letter = " ";
    //첫 번째 암호화 코드 출력
    for(let i = 0; i < word.length; i++){
    // 아스키 코드 변환 됨
    letter = word.charCodeAt(i);
    // 첫 번째 암호화
    result = letter + 2;
    // 첫 번째 화면 출력
    document.querySelector('#result').innerHTML += String.fromCharCode(result);

    // 두번째 암호화
    result2 = (letter * 7) % 80 + 48 ;
    // 두번째 화면 출력
    document.querySelector('#result2').innerHTML += String.fromCharCode(result2);
    }
}

