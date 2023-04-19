const name = "Nguyễn Tuấn Anh";
let age = 22;
const handsome = true;

// name = "123"; const không được phép gắn giá trị khác vì const không thay đổi
age = 30;

function infoUser(userName, userAge, handsome) {
    return (
        "Tên: " +
        userName +
        ", Tuổi: " +
        userAge +
        ", có đẹp trai không: " +
        handsome
    );
}

console.log(infoUser(name, age, handsome));
