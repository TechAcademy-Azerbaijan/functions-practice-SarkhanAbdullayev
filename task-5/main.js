function maxnumber(a,b,c,d){

    if(a > b && a > c && a > d){
        console.log(a);
    }
    else if(b > a && b > c && b > d){
        console.log(b);
    }
    else if(c > a && c > b && c > d){
        console.log(c);
    }
    else{
        console.log(d);
    }
}

maxnumber(7,5,6,4);

// function maxnumber(arr){
//     let max = 0
//     for (let i = 0; i< arr.length; i++) {
//         if(arr[i] > max){
//             max = arr[i]
//         }
//     }
//     console.log(max);
// }

// let array = [1,2,3,4]

// maxnumber(array)
