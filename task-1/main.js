function price(n){
    let first = parseInt( n / 100 )
    let second = parseInt( n % 100 / 20)
    let third = n % 120

    console.log(first * 100 + second * 30 + third * 2);
}

let disc = 123
price(disc);
