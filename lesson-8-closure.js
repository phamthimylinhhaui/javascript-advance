// 1. Closure
//  là 1 hàm có thể ghi nhớ nơi nó được tạo và truy cập được biến ở phạm vi bên ngoài của nó
//
// 2. Ứng dụng
// - Viết code ngắn gọn hơn
// - Biều diễn, ứng dụng tính private trong OOP
//
// 3. Tóm tắt
//
//
//
// 4. Lưu ý
// - Biến được tham chiếu (refer) trong closure sẽ không được xóa khỏi bộ nhớ khi hàm cha thực thi xong
// - Các khái niệm js nâng cao rất dễ gây nhầm lẫn

// 1.
function createCounter() {
    let counter = 0;

    function increase() {
        counter = counter + 1;
        return counter;
    }

    return increase;//return function increase
}

//tao ra moi truong thuc thi moi, tham chieu den gia tri moi nhat cua counter
const counter1 = createCounter();//gan function createCounter

console.log(counter1())//1
console.log(counter1())//2
console.log(counter1())//3

// 2. log type

function createLog(namespace) {
    function logger(message) {
        console.log(`[${namespace}]: ${message}`)
    }

    return logger;
}

const infoLogger = createLog('Info');
infoLogger('register cong');
infoLogger('gui mail thanh cong');

const errorLogger = createLog('Error');
errorLogger('register that bai');
errorLogger('gui mail that bai');


