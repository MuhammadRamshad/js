// Map()

// let numbers = [1,2,3,4];
// const doubledArray = numbers.map(function (num){
//     return num*2;
// })

// console.log('Doubled ', doubledArray);
// console.log('Og ' ,numbers)

// const products = [
//   { name: "Laptop", stock: 5, price:1000 },
//   { name: "Phone", stock: 10, price:500 },
//   { name: "Tablet", stock: 3, price:300 }
// ];

// // 10% discount

// const discountedPrices = products.map((products)=>{
// return {
//     name: products.name,
//     stock: products.stock,
//     price: products.price * 0.9,
// }})
// console.log(discountedPrices);


// reduce()

// const numbers1 = [1,2,3];
// const totalSum = numbers1.reduce((accumulator, currentValue)=>{
//     // console.log('Acc ',accumulator);
//     // console.log('Cur ',currentValue);
//     return accumulator + currentValue;
// },10)
// // console.log(totalSum);

// // total inventory value
// const products2 = [
//   { name: "Laptop", stock: 5, price:1000 },
//   { name: "Phone", stock: 10, price:500 },
//   { name: "Tablet", stock: 3, price:300 }
// ];

// const totalValue = products2.reduce((acc,product)=>{
//     // console.log(acc);
//     // console.log(cur);
//     return acc + product.stock * product.price;
// },0)

// console.log(totalValue)

// filter()
// const numbers2 = [1,2,3,4,5,6];
// const gt3 = numbers2.filter((num)=>{
//     return num > 3;
// })
// console.log(gt3);

// //find()
// const numbers2 = [1, 2, 3, 4, 5, 6];
// const gt3 = numbers2.find((num) => {
//   return num > 3;
// });
// console.log(gt3);