// IIFE - Immediately Invoked Function Expression
// Self-Invoking Function
// la 1 Function Expression được gọi ngay lập tức

// --------
// 1. IIFE trông như thế nào?
// 2. Dùng dấu ; trước IIFE
// 3. IIFE là hàm "private"
// 4. Sử dụng IIFE khi nào?
//  - Code có thể chạy luôn xong nếu viết ra ngoài nó cũng chạy luôn mà ?
//    - Vì mong muốn tạo ra 1 phạm vi block code tránh các biến toàn cục, ảnh hưởng đến các phần code khác
//    - Ví dụ như trùng tên ( thường IIFE không có tính dùng lại) các bến trong dự án
//    - Được ứng dụng trong các thư viện slide show
// 5. Các cách tạo ra một IIFE
// 6. Ví dụ sử dụng IIFE

const message = 'message' // boc phai co ; truoc IIFE neu k dung dau ; ở cuối
;(function logF(message) {// tuong duong ; o dong 13
  console.log(message)
})(message);

(() => console.log(1234))();

// logF('test') error: logF is not defined vi IIFE private
 let i = 0;
(function logOneToTen() {
  i ++;
  console.log(i)
  if (i < 10) logOneToTen()// dung lai dc o chinh no - de quy
})();

// 5.
(function () {
  console.log(12345);
}());

+function () {
  console.log(123456);
}();

// 6.
// tính toàn vẹn dữ liệu => tính đóng gói

// vấn đề
const app = {
  cars: [],// nên che dấu biến lưu trữ dữ liệu
  add(car) {
    this.cars.push(car)
  },
  edit(index, car) {
    this.cars[index] = car
  },
  delete(index) {
    this.cars.splice(index, 1)
  }
}
// app.cars = null => error Uncaught TypeError: Cannot read properties of null (reading 'push')
app.add("BMV")
app.add("Mec")
app.edit(0, "BMV2")
app.delete(1)

const app2 = (function () {
  // private
  const cars = [];

  // return nhung cai ma ta muon public thoi
  return {
    get(index) {
      return cars[index];
    },
    add(car) {
      cars.push(car)
    },
    edit(index, car) {
      cars[index] = car
    },
    delete(index) {
      cars.splice(index, 1)
    }
  }
})()

app2.cars = null;// doan nay se k truy cap dc cars vi k public
app2.add("BMV")
app2.add("Mec")
app2.edit(0, "BMV2")
app2.delete(1)
app2.get(0)
