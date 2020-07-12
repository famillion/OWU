////=================================================== HOME WORK 4 ====================================================

////=================================================== 1 ==============================================================

// // - створити функцію яка виводить масив
//
// function showArray(array) {
//     for (const el of array) {
//         console.log(el);
//     }
// }
//
////=================================================== 2 ==============================================================

// // - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
//
// function randArray() {
//     let arr = [];
//     for (let i = 0; i < 10; i++) {
//         arr.push(+(Math.random() * 100).toFixed(0));
//     }
//     showArray(arr);
// }
//
// randArray();
//
////=================================================== 3 ==============================================================

// // - створити функцію яка приймає три числа та виводить та повертає найменьше.
//
// function min(a, b, c) {
//     let number = Math.min(a, b, c);
//     console.log(number);
//     return number;
// }
//
// min(1, 3, -10);
//
////=================================================== 4 ==============================================================

// // - створити функцію яка приймає три числа та виводить та повертає найбільше.
//
// function max(a, b, c) {
//     let max = Math.max(a, b, c);
//     console.log(max);
//     return max;
// }
//
// max(4, 5, 2);
//
////=================================================== 5 ==============================================================
//
// // // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
//
// function minMax() {
//     let min = Math.min(...arguments);
//     let max = Math.max(...arguments);
//     console.log(max);
//     return min;
// }
//
// console.log(minMax(1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10));

////=================================================== 6 ==============================================================
//
// // - створити функцію яка виводить масив
//
// function createArray(n) {
//     let arr = [];
//     for (let i = 0; i < n; i++) {
//         arr.push(+(Math.random() * 100).toFixed(0));
//     }
//     return arr;
// }
//
// let testArray = createArray(10);
// console.log(testArray);
//
// ////=================================================== 7 ==============================================================
//
// // - створити функцію яка повертає найбільше число з масиву
//
// function maxInArray(array) {
//     return Math.max(...array);
// }
//
// console.log(maxInArray(testArray));
//
// ////=================================================== 8 ==============================================================
//
// // - створити функцію яка повертає найменьше число з масиву
//
// function minInArray(array) {
//     return Math.min(...array);
// }
//
// console.log(minInArray(testArray));
//
// ////=================================================== 9 ==============================================================
//
// // - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
//
// function sumArray(array) {
//     let sum = 0;
//     for (const num of array) {
//         sum += num;
//     }
//     return sum;
// }
//
// console.log(sumArray(testArray));
//
// ////=================================================== 10 ==============================================================
//
// // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// function averageArray(array) {
//     let sum = 0;
//     for (const num of array) {
//         sum += num;
//     }
//     return sum / array.length;
// }
//
// console.log(averageArray(testArray));
//
// ////=================================================== 11 ==============================================================
//
// // - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
//
// function lengthObjArr(arrayOfObjs) {
//     return arrayOfObjs.length;
// }
//
// ////=================================================== 12 ==============================================================
//
// // - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
//
// function sumPropertiesObjArr(arrOfObjs) {
//     let sum = 0;
//     for (const obj of arrOfObjs) {
//         sum += Object.keys(obj).length;
//     }
//     return sum;
// }

////=================================================== 13 ==============================================================

// // - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// //     Приклад
// let ar1 = [1, 2, 3, 4];
// let ar2 = [2, 3, 4, 5];
// // результат
// //     [3,5,7,9]
//
// function arraysSumator(arr1, arr2) {
//     let resArr = [];
//     for (let i = 0; i < arr2.length; i++) {
//         resArr.push(arr1[i] + arr2[i]);
//     }
//     return resArr;
// }
//
// console.log(arraysSumator(ar1, ar2));

////=================================================== 14 ==============================================================

// // - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//
// function replaceObj(arrObj, i) {
//     let rep = arrObj[i];
//     arrObj[i] = arrObj[i + 1];
//     arrObj[i + 1] = rep;
// }

////=================================================== 15 ==============================================================

// // - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// // Двожина масиву від 2 до 100
// // Приклад
// // [1,0,6,0,3] => [1,6,3,0,0]
// // [0,1,2,3,4] => [1,2,3,4,0]
// // [0,0,1,0]   => [1,0,0,0]
//
// let testZeros = [0,0,1,0];
//
// console.log(testZeros);
//
// zeroToEndArr(testZeros);
//
// console.log(testZeros);
//
// function zeroToEndArr(array) {
//     let zeros = [];
//     for (let i = 0; i < array.length; i++) {
//         if(!array[i]){
//             let splice = array.splice(i, 1);
//             zeros.push(...splice);
//             i--;
//         }
//     }
//     if (zeros.length > 0) {
//         array.push(...zeros);
//     }
// }

////=================================================== 16 ==============================================================

// // Створити функцію яка :
// // - Додає в боді блок з текстом "Hello owu"
//
// function addHelloOwu() {
//     let div = document.createElement('div');
//     div.innerText = 'Hello owu';
//     document.body.appendChild(div);
// }
//
// addHelloOwu();

////=================================================== 17 ==============================================================
//
// // - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
//
// function addElWithText(tag, text) {
//     let el = document.createElement(tag);
//     el.innerText = text;
//     document.body.appendChild(el);
// }
//
// ////=================================================== 18 ==============================================================
//
// // - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати
// // список цих автомобілів.
// //     Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// //     Всі властивості авто в обному блоці
//
// let carsArr = [
//     {brand: 'ZIL', engine: 'V1.5', color: 'blue', weight: 7, maxSpeed: 72},
//     {brand: 'volvo', engine: 'V4', color: 'red', weight: 1.5, maxSpeed: 150},
//     {brand: 'toyota', engine: 'V6', color: 'black', weight: 1.7, maxSpeed: 220},
//     {brand: 'ZAZ', engine: 'V2', color: 'yellow', weight: 0.7, maxSpeed: 180},
//     {brand: 'Belarus', engine: 'V6', color: 'blue', weight: 5, maxSpeed: 30}
// ];
//
// function addCersToBlock(carsArr, tagWrap) {
//     let wrap = document.createElement(tagWrap);
//     for (const car of carsArr) {
//         let carWrap = document.createElement('div');
//         carWrap.style.padding = '5px';
//         for (const field in car) {
//             carWrap.innerHTML += `${field}: ${car[field]} <br>`;
//         }
//         wrap.appendChild(carWrap);
//     }
//     document.body.appendChild(wrap);
// }
//
// addCersToBlock(carsArr, 'div');
//
// ////=================================================== 19 ==============================================================
//
// // - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно
// // додати список цих автомобілів.
// //     Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// //     Для кожної властивості створити всередені блока автомоблія свій блок
//
// function addCersToBlocMod(carsArr, tagWrap) {
//     let wrap = document.createElement(tagWrap);
//     for (const car of carsArr) {
//         let carWrap = document.createElement('div');
//         carWrap.style.margin = '5px';
//         carWrap.style.padding = '5px';
//         carWrap.style.backgroundColor = 'aqua';
//         for (const field in car) {
//             let fieldWrap = document.createElement('div');
//             fieldWrap.style.margin = '5px';
//             fieldWrap.style.backgroundColor = 'pink';
//             fieldWrap.innerHTML = `${field}: ${car[field]} <br>`;
//             carWrap.appendChild(fieldWrap);
//         }
//         wrap.appendChild(carWrap);
//     }
//     document.body.appendChild(wrap);
// }
//
// addCersToBlocMod(carsArr, 'div');

////=================================================== 20 ==============================================================

// // (на основі минулого ДЗ)
// // **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// // та повертає масив цих з'єднаних об'єктів.
// //     Приклад масивів:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// function mergeWithIdArr(userIdArr, citiesIdArr) {
//     let merge = [];
//     for (const user of userIdArr) {
//         let obj = {...user};
//         for (const city of citiesIdArr) {
//             if (user.id === city.user_id) {
//                 obj.address = city;
//                 merge.push(obj);
//             }
//         }
//     }
//     return merge;
// }
//
// let mergeArr = mergeWithIdArr(usersWithId, citiesWithId);
// console.log(mergeArr);

////=================================================== 21 ==============================================================

// // ***- беремо завдання з правилами з укроку №3 :
// // Та робимо це функцією.При цьому правила отримувати через аргумент.
// // "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// // При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// //     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];
//
// let ruleWrap = document.createElement('div');
// ruleWrap.classList.add('wrap');
//
// function rulesToDiv(rule, wrapBlock) {
//     let ruleDiv = document.createElement('div');
//     let titleDiv = document.createElement('div');
//     let bodyDiv = document.createElement('div');
//
//     ruleDiv.style.padding = '5px';
//
//     titleDiv.innerText = rule.title;
//     ruleDiv.appendChild(titleDiv);
//
//     bodyDiv.innerText = rule.body;
//     ruleDiv.appendChild(bodyDiv);
//
//     wrapBlock.appendChild(ruleDiv);
// }
//
// for (const rule of rules) {
//     rulesToDiv(rule, ruleWrap);
// }
//
// document.body.appendChild(ruleWrap);

////=================================================== 22 ==============================================================
// // ===========додаткове від віктора========
// // ---------------------------------------1) Точная степень двойки.-----------------------------------------------------
// //     Дано натуральное число N.
// //     Выведите слово YES, если число N является точной степенью двойки,
// //     или слово NO в противном случае.
// //     Операцией возведения в степень пользоваться нельзя!
//
// {
//     function isExactPowerOfTwo(N) {
//         while (N > 1) {
//             if (N % 2 !== 0) {
//                 return 'NO';
//             }
//             N /= 2;
//         }
//         return 'YES';
//     }
//
//     let n = 4;
//     console.log(isExactPowerOfTwo(n));
// }
//
// //
// //---------------------------------------- 2) Deep Copy ----------------------------------------------------------------
// // реалізувати глибоке копіювання обєкту за допомогою рекурсій
// //
// {
//     function objCopyRec(obj) {
//         let newObj = {};
//         for (const key in obj) {
//             newObj[key] = (typeof obj[key] === 'object') ? objCopyRec(obj[key]) : obj[key];
//         }
//         return newObj;
//     }
//
//     let usersTest = {
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             city: 'Lviv',
//             country: 'Ukraine',
//             street: 'Shevchenko',
//             houseNumber: {
//                 city: {
//                     city: 'New York',
//                     country: 'USA',
//                     street: 'East str',
//                     houseNumber: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
//                 },
//                 country: 'USA',
//                 street: 'East str',
//                 houseNumber: 21
//             }
//         }
//     };
//
//     let testObj = objCopyRec(usersTest);
//
//     console.log(testObj);
//
// }

//
// ------------------------------------------ 3) Flat ------------------------------------------------------------------
// Вирівняти багаторівневий масив в однорівневий
//     [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// ===========додаткове========

{
    let arrTest = [1, 3, ['Hello', 'Wordd', [9,6,1]], ['oops'], 9];

    // let arrFlat1 = arrTest.flat(2);
    // console.log(arrFlat1);

    let arrFlat2 = myFlat(arrTest);
    console.log(arrFlat2);

    function myFlat(arr) {
        let newArr = [];
        for (const el of arr) {
            let newEl = (Array.isArray(el)) ? myFlat(el) : el;
            if (Array.isArray(newEl)) {
                newArr.push(...newEl);
            } else {
                newArr.push(newEl);
            }
        }
        return newArr;
    }
}