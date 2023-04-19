const name = "Nguyễn Tuấn Anh";
let age = 22;
const handsome = true;

// name = "123"; //const không được phép gắn giá trị khác vì const không thay đổi
age = 30;

const infoUser = (userName, userAge, handsome) => {
    return (
        "Tên: " +
        userName +
        ", Tuổi: " +
        userAge +
        ", có đẹp trai không: " +
        handsome
    );
};

// const sum = (a, b) => a + b;
const sum = (a) => a + 1;

console.log(sum(5));

console.log(infoUser(name, age, handsome));
