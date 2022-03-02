var person = {
    name : 'kim',
    age : 25,
    get nextAge(){
        return this.age + 1;
    },
    setAge(old){
        return this.age = old;
    },
    set setAge2(old2){
        return this.age = parseInt(old2);
    }
}

//console.log(person.nextAge); // get
//console.log(person.setAge(30));
//console.log(person.setAge2 = 200); // set

{
    // 문제 1 , 2
    
    class dog {
        constructor(type , color){
            this.typeO = type;
            this.colorO = color;
        }
    }

    let puppy1 = new dog('maltiz' , 'red');
    let puppy2 = new dog('siba' , 'black');

    dog.constructor();
    // console.log(puppy1);
    // console.log(puppy2);

    class cat extends dog {
        constructor(type, color, old){
            super(type,color);
            this.age = old;
        }
    }
    cat.constructor();

    let kitty1 = new cat('coshot' , 'white' , 5);
    let kitty2 = new cat('RussianBlue' , 'gray' , 3);

    new cat();
    // console.log(kitty1);
    // console.log(kitty2);
}

{
    // 문제 3 한살 더하기 함수

    class dog2 {
        constructor(type , color){
            this.kind = type;
            this.diversity = color;
        }
    }
    dog2.constructor();

    let puppy = new dog2('siba' , 'black');
    //console.log(puppy.plusAge());

    class cat2 extends dog2 {
        constructor(type , color , old){
            super(type , color);
            this.age = old;
        }
        resultAge(){
            return this.calcAge();
        }

        calcAge(){
            return this.age += 1;
        }
    }
    cat2.constructor();
    
    let kitty = new cat2('russianBlue' , 'gray' , 3)
    //console.log(kitty.resultAge());
}

{
//    let Unit = {
//        offens : 5,
//        stat : 100,

//        get battlePoint(){
//            return this.offens + this.stat;
//        },

//        set totalPoint(heal){
//             this.stat = heal + 50;
//        },
//    }

    class Unit {
        constructor(){
            this.offens = 5;
            this.stat = 100;
        }

        get battlePoint(){
            return this.offens + this.stat; 
        }

        set heal(plus){
            this.stat += plus;
        }
    }

    let aa = new Unit();

    console.log(aa.battlePoint);
    console.log(aa.heal = 50);
}

{
    let data = {
        odd : [],
        even : [],
        setter : function(...num){
            num.forEach(e => {
                if(e % 2 == 1){
                    this.odd.push(e)
                } else {
                    this.even.push(e)
                }
            });
        },
        // getter : odd , even 데이터 숫자순으로 정렬
        getter : function(){
            
        }
    }
    data.setter(1,2,3,4,5,6,7,8);
}

// if(num % 2 == 1){
//     this.odd.push(num)
//     console.log(num);
// } else {
//     this.even.push(num)
// }