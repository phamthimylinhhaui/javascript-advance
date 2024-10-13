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

// exam3: extend
const Animal = function (name, weight) {
    this.name = name;
    this.weight = weight;
}

const Parrot = function () {
    Animal.apply(this, arguments);
    this.speak = function () {
        console.log('nha co khach!')
    }
}

const parrot1 = new Parrot('vet', 300);
parrot1.speak();
console.log(parrot1.name)
console.log(parrot1.weight)

// So sanh
// - Giong:
//      - cu phap giong nhau (fn.apply, fn.bind, fn.call)
//      - deu la các method được kết thừa từ funtion prototype (fn.bind === Function.prototype.bind)

// - Khac nhau
//      - Đối số và cách hoạt động
/*
- bind
    - Trả về hàm mới với 'this' tham chiếu tới thisArg
    - Không thực hiện gọi hàm
    - Nếu được bind kèm arg1, arg2 thì ưu tiên các đối số này hơn

    const newFn = fn.bind(thisArg, arg1, arg2, ...);
    newFn(arg1, arg2)
 */

/*
- call
    - Thực hiện bind với this và thực hiện gọi hàm
    - Nhận các đối số từ hàm gốc: arg1, arg2

    fn.call(thisArg, arg1, arg2)
 */

/*
- apply
    - Thực hiện bind với this và thực hiện gọi hàm
    - Nhận các đối số từ hàm gốc là dạng mảng: [arg1, arg2]

    fn.apply(thisArg, [arg1, arg2])
 */
