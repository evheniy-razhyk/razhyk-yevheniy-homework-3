// alert("1.Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’]. Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.");
// let mixedArray = [10, "23", -4, 3, 6, "a", "g", 9, null, "12"];
// let sum = 0;
// for (let key of mixedArray) {
//     if (+key || key == 0) {
//         sum += +key;
//     }
// }
// alert(sum);



// alert(`2.Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
// •	Добавьте в начало массива значение ‘Backbone.js’
// •	Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
// •	Добавьте в массив значение ‘CommonJS’ вторым элементом
// •	Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”
// `);
// let frameworks = ["AngularJS", "jQuery",];
// frameworks.unshift("Backbone.js");
// frameworks.push("ReactJS", "Vue.js");
// frameworks.splice(1, 0, "CommonJS")
// alert(`${frameworks.splice(frameworks.indexOf("jQuery"), 1)} - это здесь лишнее`);
// alert(frameworks);



// alert("3.Создайте строку с текстом ‘Как однажды Жак звонарь сломал фонарь головой’. Разбейте ее на массив слов, и переставьте слова в порядке ‘Как Жак звонарь однажды сломал головой фонарь’ с помощью любых методов массива (indexOf, splice ...). Затем объедините элементы массива в строку и выведите в alert исходный и итоговый варианты.");
// let originalString = "Как однажды Жак звонарь сломал фонарь головой";
// let wordsArray = originalString.split(" ");
// wordsArray.splice(1, 0, wordsArray[2], wordsArray[3]);
// wordsArray.splice(4, 2);
// wordsArray.splice(5, 2, wordsArray[6], wordsArray[5]);
// let finalString = wordsArray.join(" ");
// alert(`Оригинал: ${originalString};\nИтог: ${finalString};`);



// alert(`4,5. Создайте ассоциативный массив person, описывающий персону, с произвольным количеством произвольных полей. С помощью оператора in или typeof проверьте наличие в объекте свойства, прочитанного из prompt, и выведите его на экран. Если свойства нет, то добавляйте его в объект со значением, которое также запрашивается из prompt.

//  Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, прочитанными из prompt (например: brand, model, resolution, color...), не используя вспомогательные переменные. Добавьте этот гаджет персоне, созданной ранее.
// `);
// let person = {
//     firstName: "Евгений",
//     lastName: "Ражик",
// }
// let testKey = prompt("Введите тестовое свойство");
// if(testKey in person) {
//     alert(`${testKey}: ${person[testKey]}`);
// } else {
//     person[testKey] = prompt(`Введите значение для записи в ${testKey}`);
// }
// let phoneModel = {
//     brand: prompt("Введите название бренда телефона"),
//     model: prompt("Введите название модели телефона"),
//     color: prompt("Цвет телефона"),
//     processor: prompt("Процессор"),
//     internalMemory: prompt("Встроенная память"),
//     ram: prompt("Оперативная память")  
// }
// person.phoneModel = phoneModel;



// alert("6.Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt для ввода любых символов, полученное значение добавляйте в конец созданного массива. После выхода из цикла посчитайте сумму всех чисел массива и выведите в alert полученный результат.");
// let symbolsArray = [];
// let iterationsNumber = 10;
// let usersSymbol;
// let sum = 0;
// for (let a = 0; a < iterationsNumber; a++) {
//     symbolsArray.push(prompt("Введите символ"));
// }
// for (let key of symbolsArray) {
//     if (+key || key == 0) {
//         sum += +key;
//     }
// }
// alert(`Сумма всех чисел: ${sum}`);



// alert("7.Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения");
// let array = [];
// let result = 0;
// for (let firstValue = 1; firstValue <= 10; firstValue++) {
//     array.push([]);
//     for (let secondValue = 1; secondValue <= 10; secondValue++){
//         result = firstValue * secondValue;
//         array[firstValue - 1][secondValue - 1] = `${firstValue} * ${secondValue} = ${result}`
//     }
// }
// console.log(array);
