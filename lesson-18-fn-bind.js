// Overview
// - Binding sẽ trả về 1 hàm mới (dòng code 30)
// - Có thể nhận đối số như hàm ban đầu

// example

this.firstName = "pham";
this.lastName = "lan";

const Teacher = {
    firstName: "linh",
    lastName: "linh",
    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`)
        return `${this.firstName} ${this.lastName}`;
    },
    getData(data1, data2) {
        return `${data1} ${data2}`;
    }
}

console.log(Teacher.getFullName());//linh linh

const getName = Teacher.getFullName; // gan 1 bien = 1 function
// func hđ doc lap khi goi tro ra doi tuong window => this là 1 đối tượng ngữ cảnh thôi
console.log(getName === Teacher.getFullName)//true
console.log(getName());//pham lan

// => mong muốn gán lại hàm ở đây để dùng lại dễ dàng chứ không phải trọc vào lần lượt ntn + vẫn phải ràng buộc 1 đối tương mong muốn
// => dùng bind - phương thức được cung cấp sẵn bởi func
const getFullName = Teacher.getFullName.bind(Teacher);
console.log(getFullName === Teacher.getFullName) //false
console.log(getFullName());//linh linh

const getData = Teacher.getData.bind(Teacher, 'B', 'C');//mức độ ưu tiên truyền tham số ở bind hơn => dùng khi truyền hằng số
console.log(getData('A', 'B'))// B C => tham số động thì nên truyền ở hàm hơn

const button = document.querySelector('button');
console.dir(button);

button.onclick = function () {
    Teacher.getFullName()
};//linh linh

button.onclick = Teacher.getFullName //undefine undefine do this tham chieu den doi tuong button, do do button k co firstname lastname
button.onclick = Teacher.getFullName.bind(Teacher) //linh linh
