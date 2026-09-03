// B1: 
let  total = 0;
for(let i = 1; i<=100; i++){
    total +=i;
}
console.log(total);

// B2
for (let i = 2; i <= 9; i++) {
  console.log(`Bang cuu chuong ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i*j}`);
  }
}

// B3
const oddNumber = [];
for(let i = 1; i<100; i++){
    if(i%2 !== 0){
        oddNumber.push(i);
    }
}
console.log(oddNumber);

// B4
const emailList = [];
for(let i = 1; i<=10; i++){
    emailList.push(`user${i}example.com`);
    
}
console.log(emailList);

// B5
const tongDoanhThu = 0;
