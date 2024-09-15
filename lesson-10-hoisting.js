// Overview
// Hoisting - Keo / dua len
// Đưa phần khai báo lên đầu phạm vi
//
// 1. var + function declaration

console.log(age);//undefine
var age = 16

console.log(age);//16

console.log(sum(3, 4));//7
function sum(a, b) {
  return a + b;
}

// 2. let + const
//  vẫn có hoisting nhưng không được khởi tạo giá trị mặc định mà nó được đưa vào "vùng không được truy cập - temporal dead zone"
// vẫn được hoisting để biết trong khối đã có biến x và k nhảy ra ngoài khối để lấy x khác

{
  {
    {
      // console.log(age)// error không thể truy cập vào giá trị
      let age = 15
    }
  }
}

// bonus
const counter1 = makeCounter();

console.log(counter1());
function makeCounter() {

  let counter = 0

  return increase;

  function increase() {
    return ++counter
  }
}

