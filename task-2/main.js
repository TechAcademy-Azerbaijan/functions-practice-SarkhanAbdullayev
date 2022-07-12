const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    /* 
    Istifadəçinin daxil etdiyi dəyişəni qəbul edirik. 
    Giriş veriləni String type olur. Riyazi əməliyyatları tətbiq etmək üçün parseInt() metodundan istifadə edərək Number type-a çevrilməlidir.
    */
    var num = parseInt(result.input); // 9
    function prime(n){
    let res = "Yes"
    for (let i = 2; i < n; i++) {
        if(n % i == 0){
            res = "No"
            break;
        }
    }

    console.log(res);
}
prime(num);
});
