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
let num = 237

prime(num)
