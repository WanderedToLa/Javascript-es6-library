{
    // 'use strict';

    // function func(){
    //     console.log(this) --> strict mode 의 this 는 undefined 
    // }
    // func();

    // function constructor(){
    //     this.name = "kim";
    // }
    
    // var obj = new constructor();
    // 
}

{
   var obj2 = {
       name2 : ['kim' , 'lee' , 'park'],
       constructor2 : function(){
           obj2.name2.forEach(() => {
               console.log(this);
           })
       }
   } 
}