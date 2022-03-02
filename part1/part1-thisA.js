{
    //문제 1번

    var person = {
        name : 'son',
        sayHi : function(){
            console.log(`안녕 나는 ${person.name}`)
        },
    }

    person.sayHi();
}

{
    //2번

    var doc = {
        data : [1,2,3,4,5],
    }

    doc.plus = function(){
        let sum = 0;
        
        this.data.forEach(function(el){
            sum += el;
        })
        console.log(sum)
    }

    doc.plus();
}

{
    // 3번

    document.getElementById('btn').addEventListener('click', function(){
        setTimeout(() => { // 화살표 함수를 사용하면 this 값을 그대로 사용함
            console.log(this.innerHTML)
        } , 1000)
    })
}