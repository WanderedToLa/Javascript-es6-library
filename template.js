{
    var pants = 20;
    var socks = 100;

    function wear(str , data1 , data2){
        console.log(str[1] + data1 + str[0] + data2 )
    }

    wear`바지${pants}양말${socks}`

    //`양말20 바지100` 출력
}

{
    var pants2 = 0;
    var socks2 = 100;

    function wear2(str , data1 , data2){
        if(pants2 == 0){
            console.log(str[0] + `다 팔렸어요` + str[1] + data2)
        }else{
            console.log(str[0] + data1 + str[1] + data2)
        }
    }

    wear2`바지${pants2}양말${socks2}`

    // pants2 가 0일때 바지 다팔렸어요 양말100
}

{
    // var 변수 = '손흥민';

    // function 해체분석기(문자들, 변수들){
    //     // console.log(문자들);
    //     console.log(변수들);
    // }

    // 해체분석기`안녕하세요 ${변수} 입니다`;
    // console.log(해체분석기)
}