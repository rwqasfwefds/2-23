        // 이벤트를 연결합니다.
        window.onload = function(){
            // 문서 객체를 선택합니다.
            let button = document.getElementById('button');
            // 이벤트를 연결합니다
            button.onclick = function(){
                alert('click');
            }
        }