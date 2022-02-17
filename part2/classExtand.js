{
    class parents{
        constructor(str){
            this.name = str;
            this.sayHi = function(){console.log('hi')};
        }
    }

    let wooseok = new parents('seok');
   // wooseok.sayHi();
    //console.log(wooseok.name);
}

{
    // prototype 여러개

    class parents2 {
        constructor(nick , age){
            this.name2 = nick; 
            this.age2 = age; 
            //console.log(nick);
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
    class 할아버지{
        constructor(name){
          this.성 = 'Kim';
          this.이름 = name;
        }
      }
      
    class 아버지 extends 할아버지{
        constructor(){
          super();  // --> 할아버지의 constructor를 의미함
          this.나이 = 50;
        }
    }

    new 아버지();
}