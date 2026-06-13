/*let arr=[1,2,3,4,5,6,7,8,9,10]
console.log(arr)
arr.pop(10)// remove from end
console.log(arr)
arr.push(11)//add in last
console.log(arr)
arr.shift(1)//remove from start
console.log(arr)
arr.unshift(0)//add in start
console.log(arr)
arr.splice(3,4)//3,4 means index 3se 4 element remove honge
console.log(arr)
console.log(arr.slice(1,4))//to print a partof array
console.log(arr.length)
console.log(arr.indexOf(11))*/



//high order methods
console.log("foreach method")
num=[3,4,5,6,7,8,9]
num.forEach(ele => {
    console.log(ele)
});
console.log("map method")
num.map(i=>{
    console.log(i*2)
})
console.log("filter method")
const even=num.filter(i=>{
    return i%2==0
   
})
 console.log(even)

console.log("find method")
const large=num.find(i=>{
      return i>5
    
})
console.log(large)

console.log("reduce method")
const sum = nums.reduce((acc, curr) => {
    acc + curr, 0
});

console.log(sum);

// salary=[1000,2000,3000,4000]
// salary.map(i=>{
//     i=i+(i*(3/100))
//     console.log(i)
// })