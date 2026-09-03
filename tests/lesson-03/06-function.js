// B1:
function multiply(a, b) {
    const result = a*b;
    console.log(result);
}
multiply(3,4);
multiply(5,8);

// B2:
function findMin(a, b, c) {
    return Math.min(a, b, c);
}
console.log(findMin(88, 99, 86));
console.log(findMin(500, 670, 55));

// B3:
function getTopStuduent(students, threshold) {
    const result = [];
    for(let i = 0; i<students.length; i++){
        if(students[i].score >= threshold){
            result.push(students[i].name);
        }
    }
    return result;
    
}

const students = [
    {name: "A", score: 8.5},
    {name: "B", score: 9},
    {name: "C", score: 6.5},
    {name: "D", score: 5},
    {name: "E", score: 4},
]

const topStudents = getTopStuduent(students, 8);
console.log(topStudents);

//B4:
function calculateInterest(principal, rate, years) {
    const total = principal + (principal * rate * years) / 100;
    return total;
}

const totalAmount = calculateInterest(1000, 10, 2)
console.log(totalAmount);
