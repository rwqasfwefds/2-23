let x = document.querySelector('#pic');
x.addEventListener('mouseover',function(){
    x.src = "img/easys-2.jpg";
})

x.addEventListener('mouseout',function(){
    x.src = "img/easys-1.jpg";
})


   // 이렇게도 쌉가능
// let pic = document.querySelector('#pic');
// pic.addEventListener('mouseover', changePic);
// pic.addEventListener('mouseout', originPic);

// function changePic(){
//     pic.src = "img/easys-2.jpg"
// }
// function originPic(){
//     pic.src = "img/easys-1.jpg"
// }

