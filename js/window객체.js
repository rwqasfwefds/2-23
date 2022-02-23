function openWindow(){
    let newWindow;
    

    let strWindowFeatures = "menubar = yes, location = yes, resizable = yes," + 
    "scrollbars = yes, statue = yes";
    
    newWindowObj = window.open("https://www.naver.com/", "Naver 사이트", strWindowFeatures);
}

// function openWindow(){
//     let newWindow;
//     let flag = "yes";

//     let strWindowFeatures = `menubar = ${flag}, location = ${flag}, resizable = ${flag},
//     scrollbars = ${flag}, statue = ${flag}`;
    
//     newWindowObj = window.open("https://www.naver.com/", "Naver 사이트", strWindowFeatures);
// }

// 물결표 아래 있는 새끼로도 문자열 묶는거 쌉가능(백틱)
// 장점 백틱 안에다가 달러{} 이 새끼를 변수처럼 쓸 수 있음