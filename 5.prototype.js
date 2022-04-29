{
    // prototype & constructor

    function shop(pro1 , pro2){
        this.name = pro1;
        this.price = pro2;
    }
    
    shop.prototype.category = 'cloth'; // category를 shop 함수에 추가함

    let product1 = new shop('shirts' , 50000)
    let product2 = new shop('shoews' , 70000)

    console.log(product1);
    console.log(product2);
    console.log(product1.category)
    console.log(product1.__proto__)
}

{
    function Student(name , age){
        this.nick = name;
        this.summer = age;
    }

    Student.prototype.sayHi = function(){ //Student 함수에 sayHi 함수 추가
        //console.log(`안녕 나는 ${this.nick} 이야`)
    }

    var student1 = new Student('kim' , 20)

    student1.sayHi();
}

{
    Array.prototype.remove3 = function(){
        this.forEach((el) =>{
            if(this[el] === 3){
                this.splice(el , 1)
            }
        })
    }

    let arr = [1,2,3]; // --> new Array(1,2,3) new 를 쓰지 않아도 브라우저에서 new로 처리함

    arr.remove3();
    console.log(arr);
}
