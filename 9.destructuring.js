{
    // let arr = [1,2,3]
    // let a = arr[0];
    let [a,b,c] = [1,2,3] // 여러개의 변수를 효율적으로 저장가능
}

{
    // 다른 곳에서 만든 변수 불러오기 가능
    let {name , age} = {name : 'kim' , age : 25}

    let name = 'kim'
    let age = 25

    let obj = {name , age}
    export default obj;

    // <script type="module"> ---> index.html
    //     import obj from '/part3/destructuring.js';
    //     console.log(obj);
    // </script>
}

{
    function person({name , age}){
        console.log(name);
        console.log(age);
    }

    let obj = {name : 'kim' , age : 25}
    person(obj);                    // 객체를 그대로 전달가능
    // let arr = ['lee' , 24] -> 배열로 전달하기
    // person(obj.name , obj.age)
    // person(['lee' , 24])
}

{
    // 디스트럭쳐링 응용
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