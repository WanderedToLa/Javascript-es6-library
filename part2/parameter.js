{
    function plus(a , b = 10){ // parameter 의 기본값 설정
        //console.log(a + b)
    }
    plus(1);
}

{
    // Rest Parameters

    function param(...params){
        //console.log(params)
    }
    param(1,2,3,4,5,6,7)

    function param2(a, b, ...params2){
        //console.log(...params2)
    }
    param2(1,2,3,4,5,6,7)
}


// 문제

{
    // 문제 2 spread
    var a = [1,2,3];
    var b = ['you' , 'are'];
    var c = function(a , b){
        console.log([[...a], ...[...b]][0]) // --> ?
    }
    c(a , b)
}

{
    //문제 3 default parameter
    function func(a = 5 , b = a * 2){
        console.log(a + b);
        return 10
    }
    func(3)
}

{
    // 문제6

    var numbers = [2,3,4,5,6,1,3,2,5,5,4,6,7];

    //console.log(Math.max(...numbers));
}

{
    // 문제 7 Parameter 문자 bear 정렬하기

    function bubble(animal){
        var ani = [...animal];
        //console.log(ani.sort());
    }
    bubble('bear');
}