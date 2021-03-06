{
    var arr = ['hello' , 'world']

    console.log(arr) // ['hello' , 'world']
    console.log(...arr) // hello world

    var str = 'hello'
    console.log(str[0])
    console.log(str[1])
    
    console.log(str)
    console.log(...str)
}

{
    var o1 = { a : 1, b : 2};
    var o2 = { a : 3, ...o1 };

    console.log(o2)
}

{
    var person = {
        hello : function(){
            console.log(this.name + 'hi');
        }
    }

    var person2 = {
        name : "kim",
    }

    person.hello.apply(person2) // --> array 가능
    person.hello.call(person2)
}