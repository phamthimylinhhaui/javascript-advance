// Overview
// - Binding sẽ trả về 1 hàm mới (dòng code 30)
// - Có thể nhận đối số như hàm ban đầu

// example
// - bind document object
// - Vi du dom listen event
// - Vi du ket hom dom listen event + object method + IIFE

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

//ứng dụng
// 1
const $ = document.querySelector.bind(document)
const error = document.querySelector
console.log($('#heading'))
// console.log(error('#heading')) tro den doi tuong window va no k context => bao loi

// 2. quan ly oto (dung IIFE)
const app = (()=> {
    const cars = ['bmv'];
    const root = $('#root');
    const input = $('#input');
    const submit = $('#submit');
    return {
        add(car) {
            cars.push(car);
        },
        delete(index) {
            cars.splice(index, 1);
        },
        render() {
            const html = cars.map((car, index) => `<li>
                ${car}
                <span class="delete" data-index="${index}">x</span>
                </li>`).join('\n');
            root.innerHTML = html;
        },
        handleDelete(e) {
            const btnDelete = e.target.closest('.delete');
            if (btnDelete) {
                const index = btnDelete.dataset.index;
                console.log(index);
                this.delete(index);//err without bind vi this o day la the ul
                this.render()
            }

        },
        init() {
            const _this = this;//cach 1
            // submit.onclick = function () {
            submit.onclick = () => { //cach 1
                const car = input.value;
                this.add(car);//error this.add is not a function vi this o day la cua doi tuong submit
                this.render();

                // _this.add(car)
                input.value = '';
                input.focus();
            }

            root.onclick = this.handleDelete.bind(this)//this o day la app thay vi ul

            this.render()
        }
    }
})()

app.init();
