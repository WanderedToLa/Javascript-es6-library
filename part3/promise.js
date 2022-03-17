{
    // var promise = new Promise();

    // promise.then(function(){

    // }).catch(function(){})
}

{
    let promise2 = new Promise(function(suc , fal){
        let hardCalc = 1 + 1;
        suc(hardCalc);
    });

    promise2.then(function(result){
        console.log('success' + result);
    }).catch(function(){
        console.log('false');
    })
}