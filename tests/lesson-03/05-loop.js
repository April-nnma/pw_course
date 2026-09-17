// B1:
let total = 0;
for (let i = 1; i <= 100; i++) {
  total += i;
}
console.log(total);

// B2
for (let i = 2; i <= 9; i++) {
  console.log(`Bang cuu chuong ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

// B3
const oddNumber = [];
for (let i = 1; i < 100; i++) {
  if (i % 2 !== 0) {
    oddNumber.push(i);
  }
}
console.log(oddNumber);

// B4
const emailList = [];
for (let i = 1; i <= 10; i++) {
  emailList.push(`user${i}example.com`);
}
console.log(emailList);

// B5
let tongDoanhThu = 0;
const doanhThu = [
  { month: 1, total: 100 },
  { month: 2, total: 150 },
  { month: 3, total: 200 },
  { month: 4, total: 250 },
  { month: 5, total: 300 },
  { month: 6, total: 400 },
  { month: 7, total: 500 },
  { month: 8, total: 600 },
  { month: 9, total: 600 },
  { month: 10, total: 700 },
  { month: 11, total: 800 },
  { month: 12, total: 900 },
];
for (let i = 0; i < doanhThu.length; i++) {
  tongDoanhThu += doanhThu[i].total;
}
console.log(`Tong doanh thu cua 12 thang trong nam la: ${tongDoanhThu}`);
