let obj = {
    width: 1024,
    height: 1024,
    name: "My name"
};

console.log(obj.name);
obj.bool = false;

obj.colors = {
    border: "black",
    bg: "red"
};

delete obj.bool;

console.log(obj);

// for (let key in obj) {
//     console.log(`Ключ: ${key} значение: ${obj[key]}`);
// }

// console.log(Object.keys(obj).length);

// let arr = [1, 2, 3, "four", 50];

// arr.forEach(function(item, i, mass) {
//     console.log(`${i} : ${item} массив: ${mass} )`);
// });

// console.log(arr);

// let mas = [4, 5, 7, 8];

// for(key of mas) {
//     console.log(key);
// }

// let answer = prompt("", "");
//     arr = [];

// arr = answer.split(',');
// console.log(arr);

// let arr = ["watashi", "wa", "sashya", "des"],
//     i = arr.join(' ');
// console.log(i);

let arr = [1, 15, 4],
    i = arr.sort(cmp);

    function cmp(a, b) {
        return a - b;
    }
console.log(arr);

arr.pop(); //удаление с конца массива
arr.push(72); //добавление в конец массива

arr.shift(); //удаление первого элемента
arr.unshift(57); //добавление в начало массива


//наследование

let soldier = {
    armor: 400,
    health: 100
};

let jon = {
    health: 100
};

jon.__proto__ = soldier;

console.log(jon);
console.log(jon.armor);