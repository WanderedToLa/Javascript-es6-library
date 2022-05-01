{
    // async 가 나오기 이전부터 사용 비동기 처리를 쉽게 할수 있음
    // 많은 콜백 함수보다 함수를 순차적으로 작성 하기때문에 더 좋은 코드 디자인이 가능함.

    var promise = new Promise();

    promise.then(function(){

    }).catch(function(){})
}

{
    // promise 응용 resolve , rejection을 통해서 성공과 실패 경우 지정가능
    let promise2 = new Promise(function(suc , fal){
        let hardCalc = 1 + 1;
        suc(hardCalc); // resolve에 파라미터 전달
    });

    promise2.then(function(result){
        console.log('success' + result);
    }).catch(function(){
        console.log('false');
    })
}