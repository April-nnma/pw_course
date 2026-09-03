// B1:
const car ={
    make: "Toyota",
    model: "Corolla",
    year: 2021,
}
console.log(car.year);

// B2:
const person ={
    name: "Minh Anh",
    address: {
        street: "Le Duc Tho",
        city: "HCM",
        country: "Viet Nam",
    }
}
console.log(person.address.street);

// B3:
const student ={
    name: "Nguyen Van A",
    grades: {
        math: 10,
        english: 9,
    }
}
console.log(student.grades.math);

// B4:
const setting ={
    volume: 50, 
    brightness: 80,
}
setting.volume = 90;
console.log(setting.volume);

// B5: 
const bike ={}
bike.color = "blue";
console.log(bike);

// B6:
const employee ={
    name: "Nguyen Van B",
    age: 20,
}
delete employee.age;
console.log(employee);

// B7:
const school ={
    classA: ["An", "Bính", "Châu"],
    classB: ["Đào", "Hương", "Giang"],
}
console.log(school);
