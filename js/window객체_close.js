let newWindow;
let strWindowFeatures = "menubar = yes, location = yes, resizable = yes," + 
"scrollbars = yes, statue = yes";

function openWindow(){
    newWindowObj = window.open("https://www.naver.com/", "Naver 사이트", strWindowFeatures);
}
function closeNewWindow(){
    newWindowObj.close();
}

