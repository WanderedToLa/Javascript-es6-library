{
    //5로 출력되는 이유
    for (var i = 0; i < 5; i++) { // let 으로 변경
        setTimeout(function() { console.log(i); }, i*1000 ); 
        console.log(i * 1000);
    }
    // var 는 전역스코프로 영향을 끼치기 때문에 for 문이 종료 될 때의 값으로 남아있음
    // 따라서 5 가 다섯번 출력됨
}

{
    //a 의 값
    let a = 1;
    var func = function(){
        a = 2;
        console.log(a);
    }
    console.log(a);
}

{
    //modal 작동오류 원인 파악
    var buttons = document.querySelectorAll('button')
    var modals = document.querySelectorAll('div')

    for(var j = 0; j < 3; j++){
        buttons[j].addEventListener('click' , function(){
            modals[j].style.display = 'block';
        })
    }
}