
// //=========================================== HOME WORK 3 TASK-1 =======================================================
//
// //======================================================== 1 ===============================================================
// // -- створити об'єкт (не меньше 5ти властивостей) який описує
// // - собаку
// // - людину
// // - автомобіль
// // - квартиру
// // - книгу
//
// {
//     let dog = {
//         breed: 'Bloodhound',
//         name: 'Toozik',
//         age: 6,
//         sex: true,
//         speed: 55,
//         color: 'brown'
//     };
//
//     let man = {
//         name : 'Stepan',
//         age: 53,
//         sex: true,
//         status: false,
//         specialty: 'alcoholic'
//     };
//
//     let car = {
//         brand: 'ZIL',
//         engine: 'V1,5',
//         color: 'blue',
//         weight: 7,
//         maxSpeed: 72
//     };
//
//     let apartment = {
//         area: 34,
//         rooms: 2,
//         kitchenArea: 9,
//         bathroom: true,
//         floor: 17
//     };
//
//     let book = {
//         author: 'V. Mayakovsky',
//         title: 'HATE!',
//         publishing: 'Folio',
//         language: 'Rus',
//         year: 2009,
//         wrapper: true
//     };
// }

// //======================================================== 2 ===============================================================
// // -- Створити масив та вивести його в консоль:
// //     - з 5 собак
// // - 3 5 людей
// // - з 5 автомобілів
//
// {
//     let dogsArr = [
//         {breed: 'Bloodhound', name: 'Toozik', age: 6, sex: true, speed: 55, color: 'brown'},
//         {breed: 'spitz', name: 'Eskimosik', age: 3, sex: false, speed: 25, color: 'white'},
//         {breed: 'pug', name: 'Puggy', age: 8, sex: true, speed: 15, color: 'cacao'},
//         {breed: 'colly', name: 'Fritz', age: 5, sex: true, speed: 45, color: 'red'},
//         {breed: 'pudel', name: 'Petrovna', age: 8, sex: false, speed: 55, color: 'black'}
//     ];
//
//     console.log(dogsArr);
//
//     let manArr = [
//         {name : 'Stepan', age: 53, sex: true, status: false, specialty: 'alcoholic'},
//         {name : 'Oleg', age: 31, sex: true, status: true, specialty: 'economist'},
//         {name : 'Tamara', age: 47, sex: false, status: true, specialty: 'manager'},
//         {name : 'Alina', age: 22, sex: false, status: false, specialty: 'sauna-girl'},
//         {name : 'Marat', age: 12, sex: true, status: false, specialty: 'pupil'}
//     ];
//
//     console.log(manArr);
//
//     let carsArr = [
//         {brand: 'ZIL', engine: 'V1.5', color: 'blue', weight: 7, maxSpeed: 72},
//         {brand: 'volvo', engine: 'V4', color: 'red', weight: 1.5 , maxSpeed: 150},
//         {brand: 'toyota', engine: 'V6', color: 'black', weight: 1.7, maxSpeed: 220},
//         {brand: 'ZAZ', engine: 'V2', color: 'yellow', weight: 0.7, maxSpeed: 180},
//         {brand: 'Belarus', engine: 'V6', color: 'blue', weight: 5, maxSpeed: 30}
//     ];
//
//     console.log(carsArr);
// }

// //======================================================== 3 ===============================================================
// // -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна
// // бути об'єктом,ще одна - масивом
// // - будинок
// // - водій
// // - іграшку
// // - стіл
// // - сумка
//
// {
//     let house = {
//         residential: true,
//         floors: 14,
//         year: 1999,
//         address: {
//             zipcode: 54321,
//             city: 'Pripyat',
//             street: 'Kvadratnogo Kruga',
//             number: 13
//         },
//         entrance: ['1-73', '74-154', '155-225']
//     };
//
//     let driver = {
//         name: 'Kolya',
//         age: 43,
//         exp: 25,
//         license: ['A','B','C'],
//         car: {
//             brand: 'reno',
//             year: 2010,
//             color: 'black'
//         }
//     };
//
//     let toy = {
//         name: 'Deer',
//         price: 150,
//         id: 122345,
//         comp: ['sawdust', 'cotton', 'fabric', 'wool'],
//         info: {
//             brand: 'ToysLand',
//             color: 'brown',
//             restrict: '3+'
//         }
//     };
//
//     let table = {
//         about: {
//             brand: "Stol And Stul",
//             color: 'brown',
//             purpose: 'computer'
//         },
//         material: ['fanera', 'dvp', 'dsp', 'clue'],
//         id: 45678,
//         name: 'Computer Table',
//         price: 3000
//     };
//
//     let bag = {
//         id: 54362,
//         name: 'Bag',
//         price: 15000,
//         about: {
//             brand: 'Gucci & Gabana',
//             color: 'yellow',
//             volume: 150
//         },
//         material: ['dermontin', 'politilen', 'verjovka']
//     };
// }

// //======================================================== 4 ===============================================================
// // Дан массив:
// {
//     let users = [
//         {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'max', age: 31, status: true}
//     ];
// // - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// // - статус Андрія
//     {
//         console.log('-------------------статус Андрія--------------------');
//         console.log(users[7].status);
//     }
// // - статус Максима
//     {
//         console.log('--------------------статус Максима---------------------');
//         console.log(users[4].status);
//     }
// // - ім'я передостаннього об'єкту
//     {
//         console.log('--------------------ім\'я передостаннього об\'єкту---------------------');
//         console.log(users[users.length-2].name);
//     }
// // - ім'я третього об'єкта
//     {
//         console.log('--------------------ім\'я третього об\'єкта---------------------');
//         console.log(users[2].name);
//     }
// // - вік Олега
//     {
//         console.log('--------------------вік Олега---------------------');
//         console.log(users[6].age);
//     }
// // - вік Олі
//     {
//         console.log('--------------------вік Олі---------------------');
//         for (const user of users) {
//             if(user.name === 'olya'){
//                 console.log(user.age);
//             }
//         }
//     }
// // - вік + ім'я 5го об'єкта
//     {
//         console.log('--------------------вік + ім\'я 5го об\'єкта---------------------');
//         console.log(`${users[4].age} років ім'я ${users[4].name}`);
//     }
// // - вік + сатус Анни
//     {
//         console.log('--------------------вік + сатус Анни---------------------');
//         console.log(`${users[5].age} років, статус ${users[5].status}`);
//     }
// // Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!
//
// }

// //======================================================== 5 ===============================================================
// // -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
// {
// // -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// // - отримує текст з параграфа з id "content"
//     {
//         let textPIdContent = document.getElementById('content').innerText;
//         console.log(textPIdContent);
//     }
// // - отримує текст з блоку з id "rules"
//     {
//         let textRules = document.getElementById('rules').innerText;
//         console.log(textRules);
//     }
// // - замініть текст параграфа з id 'content' на будь-який інший
//     {
//         let pIdContent = document.getElementById('content');
//         pIdContent.innerText = 'замініть текст параграфа з id \'content\' на будь-який інший';
//
// // - замініть текст параграфа з id 'rules' на будь-який інший
//
//         let rulesDiv = document.getElementById('rules');
//         rulesDiv.innerText = 'замініть текст параграфа з id \'rules\' на будь-який інший';
//
// // - змініть кожному елементу колір фону на червоний
//
//         pIdContent.style.backgroundColor = 'red';
//         rulesDiv.style.backgroundColor = 'red';
//
// // - змініть кожному елементу колір тексту на синій
//         pIdContent.style.color = 'blue';
//         rulesDiv.style.color = 'blue';
//
// // - отримати весь список класів елемента з id=rules і вивести їх в console.log
//         console.log(rulesDiv.classList);
//     }
// // - отримати всі елементи з класом fc_rules
//     {
//         let allFcRules = document.getElementsByClassName('fc_rules');
//
// // - поміняти колір тексту у всіх елементів fc_rules на червоний
//         for (const el of allFcRules) {
//             el.style.color = 'red';
//         }
//     }
// }
// // ====================
// // ====================
// // ====================

// //======================================================== 6 ===============================================================
// // =================
// // =====class=======
// // =================
// // Взяти файл template_2.html та працювати в ньому
// {
// // - Напишіть код, який :
// // -- змінює колір тексту елемнту з ід main_header на будь-який інший
//     {
//         let mainHeader = document.getElementById('main_header');
//         mainHeader.style.color = 'pink';
//     }
// // -- робить шириниу елементу ul 400 пікселів
//     {
//         let temp2Ul = document.getElementsByTagName('ul')[0];
//         temp2Ul.style.width = '400px';
//     }
// // -- робить шириниу всіх елементів з класом linkList шириною 50%
//     {
//         let linkList = document.getElementsByClassName('linkList');
//         for (const li of linkList) {
//             li.style.width = '50%';
//         }
//
// // -- отримує текст який зберігається в елементі з класом listElement2
//         for (const li of linkList) {
//             let liClasses = li.classList;
//             for (const liClass of liClasses) {
//                 if (liClass === 'listElement2') {
//                     console.log(li.innerText);
//                 }
//             }
//         }
//     }
// // -- отримує всі елементи li та змінює ім колір фону на сірий
//     {
//         let allLiEl = document.getElementsByTagName('li');
//         for (const li of allLiEl) {
//             li.style.backgroundColor = 'grey';
//         }
//     }
// // -- отримує всі елементи 'a' та додає їм клас anchor
//     {
//         let allAEl = document.getElementsByTagName('a');
//         for (const aEl of allAEl) {
//             aEl.classList.add('anchor');
//         }
//
// // -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір
// // тексту на 40 пікселів
//         for (const aEl of allAEl) {
//             if (aEl.innerText === 'link3') {
//                 aEl.style.fontSize = '40px';
//             }
//         }
// // -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//         for (const aEl of allAEl) {
//             aEl.classList.add(`element_${aEl.innerText}`);
//         }
//     }
// // -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//     {
//         let subHeader = document.getElementsByClassName('sub-header');
//         for (const el of subHeader) {
//             let bgColor = prompt('Enter bg color');
//             el.style.backgroundColor = bgColor;
//         }
//
// // -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
// // Колір отримати з prompt()
//         for (const el of subHeader) {
//             if (el.innerText === 'content 2 segment') {
//                 let color = prompt('Enter text color');
//                 el.style.color = color;
//             }
//         }
//     }
// // -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//     {
//         let content1El = document.getElementsByClassName('content_1')[0];
//         let text = prompt('Enter some text');
//         content1El.innerText = text;
//     }
// // -- отримати елементи p та змінити їм paddin на довільне значення
//     {
//         let allPElements = document.getElementsByTagName('p');
//         for (const p of allPElements) {
//             p.style.padding = '5px';
//         }
//     }
// // -- отримати елементи з класом text2 та змінити їм текст на довільне значення
//     {
//         let text2Els = document.getElementsByClassName('text2');
//         for (const el of text2Els) {
//             el.innerText = 'отримати елементи з класом text2 та змінити їм текст на довільне значення';
//         }
//     }
// }
