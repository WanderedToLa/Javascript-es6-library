{
    //CASE 1 어디에도 포함되어있지 않은경우의 this
    console.log(this)

    function foo(){
        console.log(this)
    }
    foo()

    //기본 함수들을 저장하고있는 최상위 window 객체 출력
}

{
    // CASE2 use strict 사용시
    'use strict';

    function func(){
        console.log(this) //undefined 
    }
    func();
}

{
    // CASE3 오브젝트 안에서의 this
    var person = {
        name : 'son',
        sayHi : function(){
            console.log(`안녕 나는 ${person.name}`) // -> this.name과 같은 의미
        },
    }
    person.sayHi();

    //오브젝트 안에서의 this는 그 오브젝트를 가르킨다.
}

{
    //CASE4 constructor에서의 this

    function constructor(){
        this.name = 'kim' //새로 생성되는 오브젝트의 값에 kim 이라는 값 추가
    }

    let obj = new constructor();
}

{
    //CASE5 이벤트 리스너의 this
    document.getElementById('btn').addEventListener('click', function(){
        console.log(this) // e.currentTarget은 현재 이벤트가 동작하는 엘리먼트를 뜻함
        setTimeout(() => { // 이벤트 안의 콜백함수일 경우 arrow function 문법을 사용하면 this의 값을 그대로 사용 가능
            console.log(this.innerHTML)
        } , 1000)
    })
}

{
    var doc = {
        data : [1,2,3,4,5],
    }

    doc.plus = () => { //doc 오브젝트에 plus라는 함수 추가
        let sum = 0;
        this.data.forEach(function(el){ // doc 의 data 안의 요소를 하나씩 확인
            sum += el;
        })
        console.log(sum)
    }
    doc.plus();
}

{
   var obj2 = {
       name2 : ['kim' , 'lee' , 'park'],
       constructor2 : function(){
           obj2.name2.forEach(() => { //this 값이 변하지 않음
               console.log(this);
           })
       }
   } 
}