// Overview
// - This trong javascript đề cập đến đối tượng mà nó thuộc về
// -----
// Đặc tính
// - Trong một phương thức, this tham chiếu tới đối tượng truy cập phương thức (đối tượng trước dấu . hau het thoi)
// - Đứng ngoài phương thức, this tham chiếu đến đối tượng global (window)

// Lưu ý
// - this trong hàm tạo là đại diện cho đối tượng được tạo
// - this trong 1 hàm là undefine khi ở chế độ strict mode
// - Các phương thức bind(), call(), apply() có thể tham chiếu this đến đối tượng khác // truong hop dac biet


const Iphone7 = {
    name: 'Iphone7',
    color: 'Pink',

    takePhoto() {
        console.log(this);
    },

    children: {
        name: 'child',
        methodChild() {
            console.log(this)
        }
    }
}
Iphone7.children.methodChild();

// constructor: ham tao
const Car = function (name, color) {
    this.nameCar = name;
    this.color = color;
    this.run = function () {
        console.log('running...', this)
    }
}

Car.prototype.run2 = function () {
    console.log(this);// tro den doi tuong car
    function test() {
        console.log(this)// this trong ham + goi, tao ra 1 context chay => doi tuong window
    }
    test();//goi ham

    const testA = () => {
        console.log(this)// arrow func khong co this => nhay ra ngoai nen lay luon doi tuong car
    }
}

const mec = new Car('mec', 'black')

console.log(mec)
console.log(mec.run())
console.log(mec.run2())

