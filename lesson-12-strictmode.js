// Overview
// - Kiểm tra nghiêm ngặt
// - Thường khai báo ở đầu file js hay thẻ script hay block mà mong muốn kiểm tra nghiêm ngặt
//  -----
// Tính năng
//  - Báo lỗi khi gán giá trị cho thuộc tính có writeable: false, không thể xóa được object chỉ xóa được thuộc tính của obj
//  - Báo lỗi khi hàm có tham số trùng tên
//  - Khai báo hàm trong code block thì hàm sẽ thuộc phạm vi code block
//  - Không đặt tên biến tên hàm bằng từ khóa nhạy cảm của ngôn ngữ: private, protected, ...
// - key word: strict mode js
// ---
// Công dụng
// - tránh quên khai báo biến
// - Tránh trùng tên biến dẫn đến lỗi logic
// - Sử dụng bộ nhớ hiệu quả vì tránh tạo biến global


'use strict';

// const student = {
//     fullname: "Nguyen van A"
// }

// const student = Object.freeze({
//     fullname: "Nguyen van A"
// })

const student = {};
Object.defineProperty(student, 'fullname', {
    value: 'nguyen van a',
    writable: true,// default la false
})

student.fullname = "Nguyen van B";
console.log(student.fullname);// co thong bao loi neu dung stric mode

// function sum(a, a) {
//     return a+a;
// }

{
    function sum2(a, b) {
        return a + b;
    }
}

// console.log(sum2(2, 3)) err



