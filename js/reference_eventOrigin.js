        // 이벤트를 연결합니다.
        window.onload = function(){
                document.getElementById('button').onclick = function(){
                this.textContent = this.textContent + '★';
            }
        }