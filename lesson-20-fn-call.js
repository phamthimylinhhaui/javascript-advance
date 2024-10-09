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
