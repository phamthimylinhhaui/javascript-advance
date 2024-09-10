// Scope - phạm vi
// - Các loại phạm vi
//    - Global - Toàn cầu
//    - Code block - Khối mã: let cost
//    - Local block - hàm: var, function
// -

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
