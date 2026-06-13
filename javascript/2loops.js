// let n = 17;
// let count = 0;
// for (let i = 1; i <= n; i++) {
//     if (n % i == 0) {
//         count++;
//     }
// }
// if (count == 2) {
//     console.log("Prime");
// } else {
//     console.log("Not Prime");
// }


// let n=12345
// let count=0
// while(n>0){
//     n=Math.floor(n/10)
//     count+=1
// }
// console.log(count)

// let i=0
// while(i<=10){
//     console.log(i)
//     i++
// }

// let x=5
// let sum=0
// while(x>0){
//     sum+=x
//     x--
// }
// console.log(sum)



let x=31
let i=2
let count=0
while(i<x){
    if(x%i==0){
        count=+1
    }
    i++

}
if(count==0){
    console.log("prime")

}
else{
    console.log("not prime")
}