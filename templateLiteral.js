{
    var pants = 20;
    var socks = 100;

    function wear(str , data1 , data2){ // 첫 파라미터에 문자를 전달하고 배열로 저장
        console.log(str[1] + data1 + str[0] + data2 )
    }

    wear`바지${pants}양말${socks}`
}

{
    // 가격 반대로 출력하기
    var pants = 20;
    var socks = 100;

    `바지${pants}양말${socks}`
}

{
    // pants2 가 0일 때 바지 다팔렸어요 양말100 출력하기
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
}