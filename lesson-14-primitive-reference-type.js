// Overview
// value type and reference type
// 1. Value type (primitive types - dữ liệu nguyên thủy )
// - String
// - Number
// - Boolean
// - BigInt
// - Symbol
// - undefined
// - null
// => đối với value type thì nó gán giá trị cho 1 biến
// 2. Reference types (Non-primitive data types )
// - Object
// - Array
// - Function
// => chỉ gán địa chỉ ô nhớ thay vì value
// 3. Data types with functions
// - Value types
// - Reference types

const student = {
    name: 'student A',
}

const student2 = student;
student2.name = 'student B';
console.log(student.name); //student B
console.log(student2.name);// student B

const car = {
    name: 'car',
    method: {// method này cũng là 1 obj do đó nó dc hiểu là gán 1 địa chỉ ô nhớ vào method
        get: "get .."
    }
}


const func = (obj) => {
    // let newObj = {...obj, name: 'new object'};// doi voi object co 1 cap
    const newObj = JSON.parse(JSON.stringify(obj)) // object nhieu cap
    newObj.name = 'new'
    console.log(newObj)
}

const object = {
    name: 'object',
}

func(object)
console.log('old object', object)
