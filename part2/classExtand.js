{
    class parents{
        constructor(str){
            this.name = str;
            this.sayHi = function(){console.log('hi')};
        }
    }

    let wooseok = new parents('seok');
    wooseok.sayHi();
    //console.log(wooseok.name);
}

{
    class parents2 {
        constructor2(nick){
            this.name = nick;
        }
        sayHi2(){
            console.log('hi');
        }
        sayHi3(){
            console.log('hello');
        }
    }

    let kimwooseok = new parents2('doSeok');
    console.log(kimwooseok.prototype.constructor2.name);
}