let s1 = prompt('문자열을 입력하세요.');
let s2 = prompt('문자열을 입력하세요.');
let s3 = prompt('문자열을 입력하세요.');

if(s1.charAt(s1.length - 1) == s2.charAt(0) && (s2.charAt(s2.length -1) == s3.charAt(0)) && (s3.charAt(s3.length - 1) == s1.charAt(0))){
    document.write('good');
}
else{
    document.write('bad');
}


// 답지

// let word = prompt('문자열을 입력해 주세요.').split(" ");
// let fWord = word[0];
// let sWord = word[1];
// let tWord = word[2];

// if(fWord[fWord.length -1] == sWord[0] && sWord[sWord.length -1] == tWord[0] && tWord[tWord.length -1] == fWord[0]){
//     document.write('good');
// }
// else{
//     document.write('bad');
// }