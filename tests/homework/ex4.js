const height = 170;
const height1 = height % 100;
const idealWeight = (height1 * 9) / 10;
const maxWeight = height1;
const minWeight = (height1 * 8) / 10;

console.log(
  `Cân nặng lý tưởng: ${idealWeight}kg, Cân nặng tối đa: ${maxWeight}kg, Cân nặng tối thiểu: ${minWeight}kg`,
);
