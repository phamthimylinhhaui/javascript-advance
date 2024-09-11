// Scope - phạm vi
// - Các loại phạm vi
//    - Global - Toàn cầu
//    - Code block - Khối mã: let cost
//    - Local block - hàm: var, function
// - Khi gọi mỗi hàm, luôn có 1 phạm vi mới được tạo
// - Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó và bên ngoài nó
// - Cách thức một biến được truy cập
// - Khi nào một biến bị xóa khỏi bộ nhớ ?
//    - Biến toàn cầu => khi tắt tab hay load lại
//    - Biến trong code block & trong hàm? -> tự xóa khi khối đó hay hàm đó thực thi xong
//    - Biến trong hàm, được tham chiếu bởi 1 hàm -> k tự xóa


// 1, Global
{
  var x = 1;
}
console.log(x)

// Khối mã
{
  let y = 2
  let x = 2
}
// console.log(y); error

// hàm
function xy() {
  var z = 3
}
// console.log(z) error

const age = 12;

{
  const age = 14;
  {
    console.log(age)// 14
  }
}
