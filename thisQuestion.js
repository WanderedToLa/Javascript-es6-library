{
    // sayHi 함수 호출시 안녕 나는 son  콘솔로 출력
    var person = {
        name : 'son',
    }

    person.sayHi();
}

{
    // plus 함수 호출시 data의 모든 값을 더해서 콘솔로 출력
    // doc 안에 코드 작성 x 
    var doc = {
        data : [1,2,3,4,5]
    }
    
    doc.plus()
}

{
    // setTimeOut 함수 사용해서 버튼 클릭시 1초뒤 콘솔로 글씨 출력

    document.getElementById('버튼').addEventListener('click', function(){
        console.log(this.innerHTML)
    });
}