{
    class parents{
        constructor(str){
            this.name = str;
            this.sayHi = function(){console.log('hi')};
        }
    }

    let wooseok = new parents('seok');
    wooseok.sayHi();
    console.log(wooseok.name);
}

{
    // prototype 여러개인 경우
    class parents2 {
        constructor(nick , age){
            this.name2 = nick; 
            this.age2 = age; 
            console.log(nick);
        }
        sayHi2(){
            console.log('hi');
        }
        sayHi3(){
            console.log('hello');
        }
    }

    let kimwooseok = new parents2('doSeok' , 20);
    kimwooseok.sayHi2();
}

{
    // super 함수로 상위 클래스함수 호출하기
    class grandFather{
        constructor(name){
          this.성 = 'Kim';
          this.이름 = name;
        }
      }
      
    class father extends grandFather{
        constructor(){
          super();  // --> grandFather의 constructor를 의미함
          this.나이 = 50;
        }
    }

    new father();
}

{
    // class 사용해서 강아지 출력하기 
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
    // get / set 응용
   let Unit = {
       offens : 5,
       stat : 100,

       get battlePoint(){
           return this.offens + this.stat; // get 은 리턴값을 가지고 있어야 함
       },

       set totalPoint(heal){
            this.stat = heal + 50; // 기존 수치에서 변화를 줄 수 있음
       },
   }
}
{
    // class 와 get, set 같이 사용하는 경우
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

    console.log(person.nextAge); // get
    console.log(person.setAge(30));
    console.log(person.setAge2 = 200); // set
}

{
    // 1부터 8까지 값이 전달 되었을 때 홀수와 짝수 구분하여 값 분류하기
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
    }
    data.setter(1,2,3,4,5,6,7,8);
}