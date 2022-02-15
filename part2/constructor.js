{
    // prototype & constructor

    function shop(pro1 , pro2){
        this.name = pro1;
        this.price = pro2;
    }
    
    shop.prototype.category = 'cloth';

    let product1 = new shop('shirts' , 50000)
    let product2 = new shop('shoews' , 70000)

    //console.log(product1);
    //console.log(product2);
    //console.log(product1.category)
    //console.log(product1.__proto__)
}

{
    // practice

    function Student(name , age){
        this.nick = name;
        this.summer = age;
    }

    Student.prototype.sayHi = function(){
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

    let arr = [1,2,3]; // --> new Array(1,2,3)

    arr.remove3();
    console.log(arr);
}
