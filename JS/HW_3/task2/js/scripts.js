////=================================== HOME WORK 3 TASK-2 ===============================================================

{
    let sitec = document.getElementById('sitec');
    sitec.style.display = 'none';

    let fightClub = document.getElementById('fight-club');
    fightClub.style.display = 'none';

////============================================= 1 =====================================================================

// // - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей.
// // (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
//
//     let cat = {
//         name: 'krakken',
//         age: 5,
//         color: 'red'
//     };
//
//     let stolb = {
//         height: '15m',
//         material: 'gelezo-beton',
//         provod: 'radio'
//     };
//
//     let notebook = {
//         brend: 'acer',
//         OS: 'Windows',
//         SSD: '256Gb'
//     };
//
//     let kastrulia = {
//         diameter: 12,
//         cover: 'glass',
//         induction: true
//     };
//
//     let bomb = {
//         mass: '100kt',
//         charge: 'plutonium',
//         active: false
//     };

//
//     ////============================================= 2 ======================================================================
//
// // - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект.
// // Опишите что угодно, машину, картину, болт... Пример :
// // let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
//
//     let alcash = {
//         name: 'Valdemar',
//         age: 43,
//         skills: ['samogon','bojarka','tormoznaja jidkost'],
//         address: {
//             city: 'Bobrujsk',
//             street: 'Bobrova',
//             number: 2
//         }
//     }
//
//     let bide = {
//         id: 123456,
//         country: 'Ukraine',
//         price: 800,
//         complekt: ['bide','bolt','brelok'],
//         about: {
//             brand: 'Carina',
//             color: 'white',
//             weight: 15,
//             cover: false
//         }
//     }
//
//     let tachka = {
//         wheels: 1,
//         type: 'tachka',
//         kuzov: 'ocinkovka',
//         appointment: ['sad','gorod','stroika'],
//         features: {
//             capacity: '120kg',
//             legibility: true
//         }
//     }
//
//     let mineralka = {
//         article: 23123123,
//         title: 'Polana Kvasova',
//         application: ['pechija', 'bodun', 'gastrit'],
//         minerals: {
//             Ca: 0.03,
//             Ma: 0.05,
//             Cl: 0.01
//         }
//     }
// //
// //     ////============================================= 3 ======================================================================
// //
// // // - При помощи for in вывести все ключи всех объектов из задания 1 и 2
//
//
//         let objArrAll = [cat, stolb, notebook, kastrulia, bomb, alcash, bide, tachka, mineralka];
//         let objArrAllStr = ['cat', 'stolb', 'notebook', 'kastrulia', 'bomb', 'alcash', 'bide', 'tachka', 'mineralka'];
//
//         let objCount = 0;
//
//         for (const obj of objArrAll) {
//             console.log(`+++++++++++++++++++++++++++++++++++|| Object ${objArrAllStr[objCount]} ||++++++++++++++++++++++++++++++++`);
//
//             for (const key in obj) {
//                 console.log(key);
//                 if(typeof obj[key] === 'object'){
//                     console.log(`------------------------ Inner Obj ${key} ------------------------------`);
//                     if (!Array.isArray(obj[key])) {
//                         for (const inKey in obj[key]) {
//                             console.log(inKey);
//                         }
//                     }
//                 }
//             }
//             objCount++;
//         }
// ////============================================= 4 ======================================================================
// // - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
//
//         console.log('=================================================================================================');
//
//         for (const obj of objArrAll) {
//             console.log(Object.keys(obj));
//         }


    ////============================================= 5 ======================================================================

// // - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет.
// // (Значаения полей могу быть выдуманными)
//
//
//     let carsArr = [
//         {model: 'sedan', year: 2002, power: 2, color: 'black'},
//         {model: 'velik', year: 2012, power: 0.2, color: 'yellow'},
//         {model: 'brevno', year: 1290, power: 1, color: 'brown'},
//         {model: 'fiat', year: 1987, power: 22, color: 'red'},
//         {model: 'venik', year: 1589, power: 223, color: 'green'},
//         {model: 'kamaz', year: 1974, power: 53, color: 'orange'},
//         {model: 'layba', year: 2019, power: 14, color: 'white'},
//         {model: 'kokon', year: 2005, power: 4, color: 'pink'},
//         {model: 'bibika', year: 2018, power: 10, color: 'syen'},
//         {model: 'pedal', year: 1990, power: 2, color: 'red'}
//     ];
//
//
//     ////============================================= 6 ======================================================================
// // - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион.
// // (Значаения полей могу быть выдуманными)
//
//     let citiesArr = [
//         {name: 'Krigopol', population: 130000, country: 'Gvadelupa', region: 'Krigopolsky kray'},
//         {name: 'Mexico', population: 15000000, country: 'Mexico', region: 'Mexico'},
//         {name: 'Kakashville', population: 40000, country: 'Paragvai', region: 'Kakashkino'},
//         {name: 'Paradice', population: 94, country: 'Ganduras', region: 'Kolomorja'},
//         {name: 'Muhosransk', population: 23000000, country: 'Kakmandu', region: 'Zajopinsk'}
//     ];
//
//     ////============================================= 7 ======================================================================
//
// // - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель.
// // Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
//
//     let carsWithDriverArr = [
//         {
//             model: 'reno', year: 2004, power: 25, color: 'black', driver:
//                 {name: 'Anton', age: 23, sex: true, exp: 3}
//         },
//         {
//             model: 'T-150', year: 1975, power: 150, color: 'yellow', driver:
//                 {name: 'Natasha', age: 34, sex: false, exp: 12}
//         },
//         {
//             model: 'metla', year: 1292, power: 1, color: 'brown', driver:
//                 {name: 'Olga', age: 33, sex: false, exp: 23}
//         },
//         {
//             model: 'audi', year: 2007, power: 15, color: 'red', driver:
//                 {name: 'Mikola', age: 27, sex: true, exp: 7}
//         },
//         {
//             model: 'verhovina', year: 1973, power: 0.1, color: 'green', driver:
//                 {name: 'Makar', age: 14, sex: true, exp: 0}
//         }
//     ];
//
//     ////============================================= 8 ======================================================================
//
// // - проитерировать каждый массив из задания 5,6,7 при помощи while.
//     console.log('__________________________________WHILE___________________________________');
//     {
//         console.log('_______Cars___________________________________');
//         let carsCount = 0;
//         while (carsCount < carsArr.length){
//             console.log(carsArr[carsCount]);
//             carsCount++;
//         }
//
//         console.log('_______Cities___________________________________');
//
//         let citiesArrCount = 0;
//         while (citiesArrCount < citiesArr.length){
//             console.log(citiesArr[citiesArrCount]);
//             citiesArrCount++;
//         }
//
//         console.log('_______Cars with Driver___________________________________');
//
//         let cDCount = 0;
//         while (cDCount < carsWithDriverArr.length){
//             console.log(carsWithDriverArr[cDCount]);
//             cDCount++;
//         }
//     }
//
//
//     ////============================================= 9 ======================================================================
//
// // - проитерировать каждый массив из задания 5,6,7 при помощи for .
//     console.log('__________________________________FOR___________________________________');
//     {
//         console.log('_______Cars___________________________________');
//
//         for (let i = 0; i < carsArr.length; i++) {
//             console.log(carsArr[i]);
//         }
//
//         console.log('_______Cities___________________________________');
//
//         for (let i = 0; i < citiesArr.length; i++) {
//             console.log(citiesArr[i]);
//         }
//
//         console.log('_______Cars with Driver___________________________________');
//
//         for (let i = 0; i < carsWithDriverArr.length; i++) {
//             console.log(carsWithDriverArr[i]);
//         }
//     }
//
//     ////============================================= 10 ======================================================================
//
// // - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
//     console.log('__________________________________FOR OF___________________________________');
//     {
//         console.log('_______Cars___________________________________');
//
//         for (const car of carsArr) {
//             console.log(car);
//         }
//
//         console.log('_______Cities___________________________________');
//
//         for (const city of citiesArr) {
//             console.log(city);
//         }
//
//         console.log('_______Cars with Driver___________________________________');
//
//         for (const carD of carsWithDriverArr) {
//             console.log(carD);
//         }
//     }
//
//     ////============================================= 11 ======================================================================
//
// // - взять объекты из задания 1 и превратить каждый в json.
//
//     {
//         let firstTaskObjsArr = [cat, stolb, notebook, kastrulia, bomb];
//         let firstTaskObjsArrJSON = [];
//
//         for (const obj of firstTaskObjsArr) {
//             firstTaskObjsArrJSON.push(JSON.stringify(obj));
//         }
//
//         console.log('_________________________JSON str_______________________________');
//         console.log(firstTaskObjsArrJSON);
//
//
//     ////============================================= 12 ======================================================================
//
// // - взять json из задания 11 и превратить их обратно в объекты.
//
//         let firstArrJSONparse = [];
//
//         for (const el of firstTaskObjsArrJSON) {
//             firstArrJSONparse.push(JSON.parse(el));
//         }
//
//         console.log('_________________________JSON parse_______________________________');
//         console.log(firstArrJSONparse);
//     }
//
//     ////============================================= 13 ======================================================================
//
// // - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
//
//     console.log('_________________________JSON str 5_______________________________');
//     for (const car of carsArr) {
//         console.log(JSON.stringify(car));
//     }
//
//     ////============================================= 14 ======================================================================
//
// // - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
//
//     console.log('_________________________JSON str 6_______________________________');
//     for (const city of citiesArr) {
//         console.log(JSON.stringify(city));
//     }
//
//     ////============================================= 15 ======================================================================
//
// // - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
//
//     console.log('_________________________JSON str 7_______________________________');
//     for (const carD of carsWithDriverArr) {
//         console.log(JSON.stringify(carD));
//     }

////============================================= 16 ======================================================================
//
// // - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// // Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
//
//     let usersArr = [
//         {id: 1, name: 'Pedro', age: 34, sKills: ['copat', 'rubat', 'sopat', 'klast', 'sobirat']},
//         {id: 2, name: 'Rodrigo', age: 34, sKills: ['varit', 'jarit', 'parit', 'tushit', 'pech']},
//         {id: 3, name: 'Sandra', age: 34, sKills: ['est', 'pit', 'rabotat']},
//         {id: 4, name: 'Antoha', age: 34, sKills: ['est', 'pit', 'katacca', 'klast', 'gulat']},
//         {id: 5, name: 'Frodo', age: 34, sKills: ['begat', 'prigat', 'grustit', 'brosat', 'pratacca']}
//     ];
//
//     console.log('_______________________________________________SKILLS iter_________________________________________________')
//
//     for (const user of usersArr) {
//         console.log(`------------- user ${user.name} -----------------`);
//         for (const userKey in user) {
//             if (Array.isArray(user[userKey])) {
//                 console.log(`${userKey}: `);
//                 for (const skills of user[userKey]) {
//                     console.log(`- ${skills}`);
//                 }
//             }else{
//                 console.log(`${userKey}: ${user[userKey]}`);
//             }
//         }
//     }
//
// ////============================================= 17 ======================================================================
//
// // - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
//
//     console.log('_______________________________________________SKILLS iter copy arr_________________________________________________')
//
//     let usersSkillsArr = [];
//
// // Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills.
// // Скопировать все skills всех пользователей в отедльный массив
//
//     for (const usrObj of usersArr) {
//         for (const usr in usrObj) {
//             if(Array.isArray(usrObj[usr])){
//                 usersSkillsArr.push(...usrObj[usr]);
//             }
//         }
//     }
//
//     console.log(usersSkillsArr);
//     console.log('_________________________________________________________________')

////============================================= 18 ======================================================================
// //     - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
//
//     let users = [
//         {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//         {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//         {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
//         {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//         {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
//         ];
//
//     for (const user of users) {
//         console.log(user);
//         if(user.skills !== null && user.skills.length > 0){
//            for (const skill of user.skills) {
//                console.log(skill);
//            }
//        }
//     }

    ////============================================= 19 ======================================================================
// // - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
//
//     let users = [
//         {name: 'vasya', age: 31, status: false, address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}},
//         {name: 'petya', age: 30, status: true, address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}},
//         {name: 'kolya', age: 29, status: true, address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}},
//         {name: 'olya', age: 28, status: false, address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}},
//         {name: 'max', age: 30, status: true, address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}},
//         {name: 'anya', age: 31, status: false, address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}},
//         {name: 'oleg', age: 28, status: false, address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}},
//         {name: 'andrey', age: 29, status: true, address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}},
//         {name: 'masha', age: 30, status: true, address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}},
//         {name: 'olya', age: 31, status: false, address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}},
//         {name: 'max', age: 31, status: true, address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}}
//         ];
//
//     let addresses = [];
//
//     for (const user of users) {
//         addresses.push(user.address);
//     }
//     console.log(addresses);

    ////============================================= 20 ======================================================================

// // - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// //     Всі данні в одному блоці.
//
//     for (const user of users) {
//         let userDiv = document.createElement('div');
//
//         let title = document.createElement('h2');
//         title.innerText = `user ${user.name}`;
//         userDiv.appendChild(title);
//
//         let userUl = document.createElement('ul');
//         userUl.style.listStyle = 'none';
//         userDiv.appendChild(userUl);
//
//         for (const el in user) {
//             let elLi = document.createElement('li');
//             userUl.appendChild(elLi);
//
//             if(typeof user[el] === 'object'){
//                 elLi.innerText = `${el}: `;
//                 let elUl = document.createElement('ul');
//                 elUl.style.listStyle = 'none';
//                 elLi.appendChild(elUl);
//
//                 for (const add in user[el]) {
//                     let addLi = document.createElement('li');
//                     addLi.innerText = `${add}: ${user[el][add]}`;
//                     elUl.appendChild(addLi);
//                 }
//             }else {
//                 elLi.innerText = `${el}: ${user[el]}`;
//             }
//         }
//
//         document.body.appendChild(userDiv);
//     }

    ////============================================= 21 ======================================================================

// // - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// //     розділивши всі властивості по своїм блокам (div>div*4)
//
//     for (const user of users) {
//         let userDiv = document.createElement('div');
//
//         let title = document.createElement('h2');
//         title.innerText = `user ${user.name}`;
//         userDiv.appendChild(title);
//
//         for (const elem in user) {
//             let elemDiv = document.createElement('div');
//             userDiv.appendChild(elemDiv);
//
//             if(typeof user[elem] === 'object') {
//                 elemDiv.innerText = `${elem}: `;
//
//                 let addrUl = document.createElement('ul');
//                 addrUl.style.listStyle = 'none';
//                 elemDiv.appendChild(addrUl);
//
//                 for (const add in user[elem]) {
//                     let addLi = document.createElement('li');
//                     addLi.innerText = `${add}: ${user[elem][add]}`;
//                     addrUl.appendChild(addLi);
//                 }
//             }else{
//                 elemDiv.innerText = `${elem}: ${user[elem]}`;
//             }
//         }
//         document.body.appendChild(userDiv);
//     }

//
    ////============================================= 22 ======================================================================

// //    - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// //    розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
//
//     for (const user of users) {
//         let userDiv = document.createElement('div');
//
//         let title = document.createElement('h2');
//         title.innerText = `user ${user.name}`;
//         userDiv.appendChild(title);
//
//         for (const elem in user) {
//             let elemDiv = document.createElement('div');
//             userDiv.appendChild(elemDiv);
//
//             if(typeof user[elem] === 'object') {
//                 elemDiv.innerText = `${elem}: `;
//
//                 let addrDiv = document.createElement('div');
//                 elemDiv.appendChild(addrDiv);
//
//                 for (const add in user[elem]) {
//                     let addInnerDiv = document.createElement('div');
//                     addInnerDiv.innerText = `${add}: ${user[elem][add]}`;
//                     addrDiv.appendChild(addInnerDiv);
//                 }
//             }else{
//                 elemDiv.innerText = `${elem}: ${user[elem]}`;
//             }
//         }
//         document.body.appendChild(userDiv);
//     }


    ////============================================= 23 ======================================================================

    // // - Дано 2 масиви з рівною кількістю об'єктів.
    // // Масиви:
    // let usersWithId = [
    //     {id: 1, name: 'vasya', age: 31, status: false},
    //     {id: 2, name: 'petya', age: 30, status: true},
    //     {id: 3, name: 'kolya', age: 29, status: true},
    //     {id: 4, name: 'olya', age: 28, status: false}
    // ];
    //
    // let citiesWithId = [
    //     {user_id: 3, country: 'USA', city: 'Portland'},
    //     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    //     {user_id: 2, country: 'Poland', city: 'Krakow'},
    //     {user_id: 4, country: 'USA', city: 'Miami'}
    // ];
    //
    // // З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
    // // Записати цей об'єкт в новий масив
    // // Частковий приклад реультату:
    // // let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
    // //
    //
    // let usersWithCities = [];
    //
    // for (const user of usersWithId) {
    //     for (const adr of citiesWithId) {
    //         if(user.id === adr.user_id){
    //             user.address = adr;
    //             usersWithCities.push(user);
    //         }
    //     }
    // }
    //
    // console.log(usersWithCities);


    ////============================================= 24 ======================================================================

    // // - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
    //
    // let textID = document.getElementById('id').innerText;
    // let textClass = document.getElementsByClassName('class')[0].innerText;
    // let textTeg = document.getElementsByTagName('div')[0].innerText;
    //
    // let textsObj = {textID, textClass, textTeg};
    //
    // for (const text in textsObj) {
    //     console.log(`********* Text ${text} **********`);
    //     console.log(textsObj[text]);
    // }

    ////============================================= 25 ======================================================================

// // // - змінити цей текст використовуючи селектори id, class,  tag
// //
//     let divById = document.getElementById('id');
//     let divByClass = document.getElementsByClassName('class')[0];
//     let divByTag = document.getElementsByTagName('div')[0];
// //
// //     divById.innerHTML = 'змінений текст використовуючи селектор <b>id</b>';
// //     // divByClass.innerHTML = 'змінений текст використовуючи селектор <b>class/b>';
// //     // divByTag.innerHTML = 'змінений текст використовуючи селектори <b>tag/b>';
//
//     ////============================================= 26 ======================================================================
//
// // - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
//
//     // divById.style.width = '600px';
//     // divById.style.height = '300px';
//
//     // divByClass.style.width = '400px';
//     // divByClass.style.height = '200px';
//     //
//     divByTag.style.width = '300px';
//     divByTag.style.height = '150px';
//
//     ////============================================= 27 ======================================================================
//
//     let line = document.createElement('hr');
//     document.body.appendChild(line);
// // - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
//
//     let divTable1 = document.createElement('div');
//     divTable1.style.margin = '20px';
//     let table = document.createElement('table');
//     let titleTable = document.createElement('caption');
//     let tr = document.createElement('tr');
//     let td = document.createElement('td');
//
//     table.cellPadding = '10';
//     table.cellSpacing = '2';
//
//     titleTable.innerHTML = '<b>1 Row Table</b>';
//
//     table.appendChild(titleTable);
//
//     table.appendChild(tr);
//
//     td.width = '50px';
//     td.height = '15px';
//
//     for (let i = 0; i < 3; i++) {
//         let tdCl = td.cloneNode();
//         tdCl.style.backgroundColor = 'aqua';
//         tdCl.style.textAlign = 'center';
//         tdCl.innerText = `col ${i + 1}`;
//         tr.appendChild(tdCl);
//     }
//
//     divTable1.appendChild(table);
//     document.body.appendChild(divTable1);
//
//     document.body.appendChild(line.cloneNode());
//
//     ////============================================= 28 ======================================================================
//
// // - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
//
//     let divTable2 = document.createElement('div');
//     divTable2.style.margin = '20px';
//
//     let table2 = table.cloneNode();
//     let titleTable2 = titleTable.cloneNode();
//
//     titleTable2.innerHTML = '<b>10 Row Table</b>'
//
//     table2.appendChild(titleTable2);
//
//     for (let i = 0; i < 10; i++) {
//         let row = tr.cloneNode();
//         for (let j = 0; j < 3; j++) {
//             let tdCl = td.cloneNode();
//             tdCl.style.backgroundColor = 'aqua';
//             tdCl.style.textAlign = 'center';
//             tdCl.innerText = `row ${i + 1} col ${j + 1}`;
//             row.appendChild(tdCl);
//         }
//         table2.appendChild(row);
//     }
//
//     divTable2.appendChild(table2);
//     document.body.appendChild(divTable2);
//
//     document.body.appendChild(line.cloneNode());
//
//     ////============================================= 29 ======================================================================
//
// // - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
//
//     let divTable3 = document.createElement('div');
//     divTable3.style.margin = '20px';
//
//     let table3 = table.cloneNode();
//     let titleTable3 = titleTable.cloneNode();
//
//     titleTable3.innerHTML = '<b>10 Row 5 column Table</b>'
//
//     table3.appendChild(titleTable3);
//
//     for (let i = 0; i < 10; i++) {
//         let row = tr.cloneNode();
//         for (let j = 0; j < 5; j++) {
//             let tdCl = td.cloneNode();
//             tdCl.style.backgroundColor = 'aqua';
//             tdCl.style.textAlign = 'center';
//             tdCl.innerText = `row ${i + 1} col ${j + 1}`;
//             row.appendChild(tdCl);
//         }
//         table3.appendChild(row);
//     }
//
//     divTable3.appendChild(table3);
//     document.body.appendChild(divTable3);
//
//     document.body.appendChild(line.cloneNode());
//
//     ////============================================= 30 ======================================================================
//
// // - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені.
// // n та m отримати з prompt
//
//     let n = +prompt('Enter row count');
//     let m = +prompt('Enter column count');
//
//     let divTable4 = document.createElement('div');
//     divTable4.style.margin = '20px';
//
//     let table4 = table.cloneNode();
//     let titleTable4 = titleTable.cloneNode();
//
//     titleTable4.innerHTML = `<b>${n} Row ${m} column Table</b>`;
//
//     table4.appendChild(titleTable4);
//
//
//
//     for (let i = 0; i < n; i++) {
//         let row = tr.cloneNode();
//         for (let j = 0; j < m; j++) {
//             let tdCl = td.cloneNode();
//             tdCl.style.backgroundColor = 'aqua';
//             tdCl.style.textAlign = 'center';
//             tdCl.innerText = `row ${i + 1} col ${j + 1}`;
//             row.appendChild(tdCl);
//         }
//         table4.appendChild(row);
//     }
//
//     divTable4.appendChild(table4);
//     document.body.appendChild(divTable4);
//
//     document.body.appendChild(line.cloneNode());
//

    // //============================================= 31 ======================================================================

// // --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл.
// // У файлі прописати наступні доступи та дії
//     sitec.style.display = '';
// // - знайти всі елементі, які мають class
//
//     let allSitecClasses = sitec.querySelectorAll('[class]');
//     console.log(allSitecClasses);
//
// // - знайти всі параграфи ,та змінити текст на hello oktenweb!
//
//     let allSitecP = sitec.querySelectorAll('p');
//     console.log(allSitecP);
//
//     for (const peha of allSitecP) {
//         peha.innerText = 'hello oktenweb!';
//     }
//
// // - знайти всі div та змінити ім колір на червоний
//
//     let allSitecDiv = sitec.getElementsByTagName('div');
//
//     for (const div of allSitecDiv) {
//         div.style.backgroundColor = 'red';
//     }

    // //============================================= 32 ======================================================================
//
// // ============
// // ====class===
// //     ============
// //
// //   - є сторінка rules.html.
//
//     fightClub.style.display = '';
//
// //   Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують
// //   тему контенту яка вказана в параграфі.
// //   створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li),
// //   який буде змістом того, що знаходиться на сторінці.
// //   Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
//
//     let contentId = document.getElementById('content');
//
//     let contentIdList = document.createElement('ul');
//     contentIdList.style.margin = '40px';
//     contentIdList.style.listStyleType = 'disc';
//     contentId.appendChild(contentIdList);
//
//     let rulesHeaders = fightClub.getElementsByTagName('h2');
//
//     for (const title of rulesHeaders) {
//         let li = document.createElement('li');
//         li.style.margin = '10px';
//         li.innerText = title.innerText;
//
//         contentIdList.appendChild(li);
//     }

    // //============================================= 33 ======================================================================

//     // -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому
//     // блоці.
//     // При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     // Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
//     let rules = [
//         {
//             title: 'Первое правило Бойцовского клуба.',
//             body: 'Никому не рассказывать о Бойцовском клубе.'
//         },
//         {
//             title: 'Второе правило Бойцовского клуба.',
//             body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//         },
//         {
//             title: 'Третье правило Бойцовского клуба.',
//             body: 'В схватке участвуют только двое.'
//         },
//         {
//             title: 'Четвертое правило Бойцовского клуба.',
//             body: 'Не более одного поединка за один раз.'
//         },
//         {
//             title: 'Пятое правило Бойцовского клуба.',
//             body: 'Бойцы сражаются без обуви и голые по пояс.'
//         },
//         {
//             title: 'Шестое правило Бойцовского клуба.',
//             body: 'Поединок продолжается столько, сколько потребуется.'
//         },
//         {
//             title: 'Седьмое правило Бойцовского клуба.',
//             body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//         },
//         {
//             title: 'Восьмое и последнее правило Бойцовского клуба.',
//             body: 'Новичок обязан принять бой.'
//         },
//     ];
//
//     let wrap = document.createElement('div');
//     wrap.classList.add('wrap');
//     wrap.style.padding = '20px';
//
//     for (const rule of rules) {
//         let ruleDiv = document.createElement('div');
//         let titleDiv = document.createElement('div');
//         let bodyDiv = document.createElement('div');
//
//         ruleDiv.style.padding = '5px';
//
//         titleDiv.innerText = rule.title;
//         ruleDiv.appendChild(titleDiv);
//
//         bodyDiv.innerText = rule.body;
//         ruleDiv.appendChild(bodyDiv);
//
//         wrap.appendChild(ruleDiv);
//     }
//
//     document.body.appendChild(wrap);

}
document.body.appendChild(document.createElement('hr'));

// //=============================================*** 34 ****======================================================================
{

// // *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement
// // вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
//
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(users => users.json())
//         .then(users => {
//             console.log(users);
//             let wrapDiv = document.createElement('div');
//
//             for (const user of users) {
//                 let userDiv = document.createElement('div');
//                 userDiv.style.margin = '10px';
//                 userDiv.style.padding = '5px';
//                 userDiv.style.backgroundColor = 'cyan';
//
//                 for (const key in user) {
//                     if(typeof user[key] === 'object'){
//                         let innerObj = document.createElement('div');
//                         innerObj.style.margin = '5px';
//                         innerObj.style.padding = '5px';
//                         innerObj.style.backgroundColor = 'Aquamarine';
//                         userDiv.innerHTML += `${key}: <br>`;
//
//                         for (const innerField in user[key]) {
//                             if (typeof user[key][innerField] === 'object') {
//                                 innerObj.innerHTML += `${innerField}:`;
//                                 let objInObj = document.createElement('div');
//                                 objInObj.style.margin = '5px';
//                                 objInObj.style.padding = '5px';
//                                 objInObj.style.backgroundColor = 'Turquoise';
//
//                                 for (const innerFieldKey in user[key][innerField]) {
//                                     objInObj.innerHTML += `${innerFieldKey}: ${user[key][innerField][innerFieldKey]}<br>`;
//                                 }
//                                 innerObj.appendChild(objInObj);
//                             } else {
//                                 innerObj.innerHTML += `${innerField}: ${user[key][innerField]} <br>`;
//                             }
//                         }
//                         userDiv.appendChild(innerObj);
//                     }else{
//                         userDiv.innerHTML += `${key}: $${user[key]} <br>`;
//                     }
//                 }
//                 wrapDiv.appendChild(userDiv);
//             }
//
//             document.body.appendChild(wrapDiv);
//
//         })

// //=============================================*** 35 ****======================================================================

// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement
// вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує)
// в свій блок (блок в блоці).

// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement
// вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує)
// в свій блок (блок в блоці).

// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать
// еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими
// comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий
// принадлежит какому посту


    
}