{
    var person = {
        name : 'son',
        sayHi : function(){
            console.log(`안녕 나는 ${person.name}`) // -> this.name과 같은 의미
        },
    }
    person.sayHi();
}

{
    var doc = {
        data : [1,2,3,4,5],
    }
    doc.plus = function(){
        let sum = 0;
        this.data.forEach(function(el){ // doc 의 data 안의 요소를 하나씩 확인
            sum += el;
        })
        console.log(sum)
    }
    doc.plus();
}

{
    document.getElementById('btn').addEventListener('click', function(){
        setTimeout(() => { // 화살표 함수를 사용하면 this 값을 그대로 사용함
            console.log(this.innerHTML)
        } , 1000)
    })
}
{
    'use strict';

    function func(){
        console.log(this) // --> strict mode 의 this 는 undefined 
    }
    func();
    function constructor(){
        this.name = "kim";
    }
    var obj = new constructor();
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