// 'use strict';
// Overview
// - Là phương thức trong prototype của function constructor, phương thc này được dùng để gọi hàm và cũng có thể bind this cho hàm

// - Ví dụ
//      - goi ham voi call method
//      - goi ham va bind this, luu y trong stric mode van co this neu duoc bind
//      - the hien tinh ke thừa (extends) trong OOP
//      - Mượn hàm (function borrowing), the vi du voi argument

// Exam 1
function random() {
    console.log(Math.random());
}
random();
random.call()

// Exam 2: mượn hàm

const teacher = {
    name: "John",
}

const me = {
    name: "linh",
    getFullName() {
        console.log(this)
        return this.name;
    }
}

console.log(me.getFullName())
console.log(me.getFullName.call())// this o day la window nen k co
console.log(me.getFullName.call(me))
console.log(me.getFullName.call(teacher))//john

this.name = 'linh global';

function getName() {
    return this.name;
}

// console.log(getName())// trong strict mode la undefine
console.log(getName.call(this))// van ok khi chu dong rang buoc

// Exam 3: ke thua trong oop

const Animal = function (name, weight) {
    this.name = name;
    this.weight = weight;
}

const Chicken = function (name, weight, legs) {
    Animal.call(this, name, weight);// ke thua
    this.legs = legs;
}
console.log(new Chicken('LINH', 32, 1));


// Exam 4: arguments
function logger() {
    console.log(...arguments);

    //muon for arguments ra nhung no k co phuong thuc forEach => dung ham muon voi argument
    const cars = ['bmv', 'mec'];
    cars.forEach(item => console.log(item));
    //     foreach dung this tro den doi tuong truoc no

    Array.prototype.forEach.call(arguments, item => console.log(item));// call bind this la argument roi thuc hien goi ham foreach

//     c2
    const arr = Array.prototype.slice.call(arguments);
    console.log(arr)
    arr.forEach(item => console.log(item))

//     c3
    const arr2 = Array.from(arguments)
    console.log(arr2)
    arr2.forEach(item => console.log(item))

}
logger(1, 2, 3)
