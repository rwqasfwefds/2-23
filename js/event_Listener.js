window.onload = function(){
    let closeBtn = document.querySelector('.popup > button');
    closeBtn.addEventListener('click', function(){
        document.querySelector('.popup').style.display = 'none';
    })
}




// addEventListener() : 이벤트가 일어나면 감시(클릭,키보드 입력 등등의 입력),매개변수에 감시대상을 등록하면 실행 됨
// id나 class나 onclick 이딴거 설정 안 해도 클릭 이벤트가 감지되면 바로 실행해줌