function fibonachi(n){
    let first = 1
    let second = 1
    let fibo;
    for (let i = 2; i < n; i++) {
        fibo = first + second
        first = second
        second = fibo
    }
    console.log(fibo);
}

let num = 6
fibonachi(num)
