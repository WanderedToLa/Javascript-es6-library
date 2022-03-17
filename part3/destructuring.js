{
    let arr = [1,2,3]
    let a = arr[0];

    // let [a,b,c] = [1,2,3]
}


    // let {name , age} = {name : 'kim' , age : 25}

    let name = 'kim'
    let age = 25

    let obj = {name , age}
    export default obj;

    // <script type="module"> --- > html에서 불러옴
    //     import obj from '/part3/destructuring.js';
    //     console.log(obj);
    // </script>
{
    function person({name , age}){
        console.log(name);
        console.log(age);
    }

    let obj = {name : 'kim' , age : 25}
    // let arr = ['lee' , 24]
    // person(obj.name , obj.age)
    person(obj);
    // person(['lee' , 24])
}

{
    var [number , address] = [30 , 'seoul'];
    var {address : a , number = 20 } = {address , number};

    // var {address : a , number = 20} = {address : 'seoul' , number : 30};
}

{
    let bodyInfo = {
        body : {
            height : 170,
            weight : 50,
        },
        size  : ['Large' , '30inch'],
    };

    let {
        body : {
            height,
            weight,
        },
        size : [top , inch]
    } = bodyInfo;
}