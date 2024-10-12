// Overview
// - Giống phương thức call,
// - Cho phép gọi một hàm với một this (bind) và truyền tham số của hàm gốc theo dạng mảng

// exam1:
const teacher = {
    firstName: 'John',
    lastName: 'Doe',
}

function greet(greeting, message) {
    return `${greeting} ${this.firstName} ${this.lastName}: ${message}`
}

let result = greet.call(teacher, 'xin chao', 'ban khoe khong');
console.log(result);

result = greet.apply(teacher, ['xin chao', 'ban khoe khong']);
console.log(result)

// exam2:
const teacher2 = {
    firstName: 'John2',
    lastName: 'Doe2',
    isOnline: false,
    goOnline() {
        this.isOnline = true;
        console.log(`${this.firstName} ${this.lastName} is online`);
    },
    goOffline() {
        this.isOnline = false;
        console.log(`${this.firstName} ${this.lastName} is offile`);
    }
}

const me = {
    firstName: 'linh',
    lastName: 'pham',
    isOnline: false,
}

console.log(teacher2.isOnline)
teacher2.goOnline();
console.log(teacher2.isOnline)
console.log('------')
console.log(me.isOnline)
teacher2.goOnline.apply(me);
console.log(me.isOnline)

// exam3


