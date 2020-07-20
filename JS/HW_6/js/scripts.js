////========================================= HOME WORK 6 ==============================================================

////================================ 1 =================================================================================
// // - создать массив с 20 числами.
// {
//     let arrNum20 = [];
//
//     for (let i = 0; i < 20; i++) {
//         arrNum20.push(+(Math.random() * 100).toFixed());
//     }
//
//     console.log('_____________ Array 20 num______________');
//     console.log(arrNum20);
//
// // -- при помощи метода sort и колбека  отсортировать массив.
//
//     arrNum20.sort((a, b) => a - b);
//
//     console.log('_____________ Array 20 num sort ______________')
//     console.log(arrNum20);
//
// // -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
//
//     arrNum20.sort((a, b) => b - a);
//
//     console.log('_____________ Array 20 num sort reverse ______________')
//     console.log(arrNum20);
//
// // -- при помощи filter получить числа кратные 3
//
//     let filter3 = arrNum20.filter(a => !(a % 3));
//
//     console.log('_____________ Array 20 filter % 3 ______________')
//     console.log(filter3);
//
// // -- при помощи filter получить числа кратные 10
//
//     let filter10 = arrNum20.filter(a => !(a % 10));
//
//     console.log('_____________ Array 20 filter % 10 ______________')
//     console.log(filter10);
//
// // -- перебрать (проитерировать) массив при помощи foreach()
//
//     console.log('_____________ Array 20 foreach() ______________');
//
//     arrNum20.forEach((a, i) => console.log(`index: ${i}, value: ${a}`));
//
// // -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
//
//     let mapX3 = arrNum20.map(a => a * 3);
//
//     console.log('_____________ Array 20 map x 3 ______________');
//     console.log(mapX3);
//
//     console.log('____________________________________________');
// }

////================================ 2 =================================================================================
// // - создать массив со словами на 15-20 элементов.
// {
//     let strToWordsArr = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam blanditiis cum deleniti iste molestias nam' +
//         ' quidem sunt tempora, voluptatibus';
//
//     let wordsArr = strToWordsArr.split(' ');
//
// // -- отсортировать его по алфавиту в восходящем порядке.
//
//     wordsArr.sort((a, b) => {
//         if (a.toLowerCase() > b.toLowerCase()) {
//             return 1;
//         }
//         if (a.toLowerCase() < b.toLowerCase()) {
//             return -1;
//         }
//         return 0;
//     });
//
//     console.log('_____________ 20 Words Arr sort ______________');
//     console.log(wordsArr);
//
// // -- отсортировать его по алфавиту  в нисходящем порядке.
//
//     wordsArr.sort((a, b) => {
//         if (a.toLowerCase() > b.toLowerCase()) {
//             return -1;
//         }
//         if (a.toLowerCase() < b.toLowerCase()) {
//             return 1;
//         }
//         return 0;
//     });
//     console.log('_____________ 20 Words Arr sort reverse ______________');
//     console.log(wordsArr);
//
// // -- отфильтровать слова длиной менее 4х символов
//
//     let wordsFiletArr = wordsArr.filter(a => a.length < 4);
//
//     console.log('_____________ 20 Words Arr filter ______________');
//     console.log(wordsFiletArr);
//
// // -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
//
//     let wordsMapArr = wordsArr.map(a => a += '!');
//
//     console.log('_____________ 20 Words map + ! ______________');
//     console.log(wordsMapArr);
//     console.log('______________________________________________________________');
// }

////================================ 3 =================================================================================
// // Все робити через функції масивів (foreach, map ...тд)
// {
// // Дан масив :
//
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
//
// // - відсортувати його за  віком (зростання , а потім окремо спадання)
//
//     users.sort((a, b) => a.age - b.age);
//
//         console.log('_____________ за  віком => зростання ______________');
//     console.log(users);
//
// // - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
//
//     users.sort((a, b) => b.age - a.age);
//
//     console.log('_____________ за  віком => спадання ______________');
//     console.log(users);
//
// // - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// // (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
//
//     let usersWithID = users.map((a, i) => {
//         a.id = +(Math.random()*1000).toFixed();
//         return a;
//     });
//
//     console.log('_____________ кожному юзеру поле id ______________');
//     console.log(usersWithID);
//
// // - відсортувати його за індентифікатором
//
//     usersWithID.sort((a, b) => a.id - b.id);
//
//     console.log('_____________ відсортувати за індентифікатором ______________');
//     console.log(usersWithID);
// }

////================================ 4 =================================================================================
// // -- наисать функцию калькулятора с 2мя числами и колбеком
// {
//
//     let calculator1 = function (a, b, callback) {
//         return callback(a, b);
//     }
//
//     console.log(calculator1(10, 20, (a, b) => a + b));
//     ;
//
// // -- наисать функцию калькулятора с 3мя числами и колбеком
//
//     let calculator2 = function (a, b, c, callback) {
//         return callback(a, b, c);
//     }
//
//     console.log(calculator2(1, 2, 3, (a, b, c) => a + b + c));
//
// }

////================================ 5 =================================================================================
// {
//
//     let cars = [
//         {
//             producer: "subaru",
//             model: "wrx",
//             year: 2010,
//             color: "blue",
//             type: "sedan",
//             engine: "ej204x",
//             volume: 2,
//             power: 400
//         },
//         {
//             producer: "subaru",
//             model: "legacy",
//             year: 2007,
//             color: "silver",
//             type: "sedan",
//             engine: "ez30",
//             volume: 3,
//             power: 250
//         },
//         {
//             producer: "subaru",
//             model: "tribeca",
//             year: 2011,
//             color: "white",
//             type: "jeep",
//             engine: "ej20",
//             volume: 2,
//             power: 300
//         },
//         {
//             producer: "subaru",
//             model: "leone",
//             year: 1998,
//             color: "yellow",
//             type: "sedan",
//             engine: "ez20x",
//             volume: 2,
//             power: 140
//         },
//         {
//             producer: "subaru",
//             model: "impreza",
//             year: 2014,
//             color: "red",
//             type: "sedan",
//             engine: "ej204x",
//             volume: 2,
//             power: 200
//         },
//         {
//             producer: "subaru",
//             model: "outback",
//             year: 2014,
//             color: "red",
//             type: "hachback",
//             engine: "ej204",
//             volume: 2,
//             power: 165
//         },
//         {
//             producer: "bmw",
//             model: "115",
//             year: 2013,
//             color: "red",
//             type: "hachback",
//             engine: "f15",
//             volume: 1.5,
//             power: 120
//         },
//         {
//             producer: "bmw",
//             model: "315",
//             year: 2010,
//             color: "white",
//             type: "sedan",
//             engine: "f15",
//             volume: 1.5,
//             power: 120
//         },
//         {
//             producer: "bmw",
//             model: "650",
//             year: 2009,
//             color: "black",
//             type: "coupe",
//             engine: "f60",
//             volume: 6,
//             power: 350
//         },
//         {producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180},
//         {
//             producer: "mercedes",
//             model: "e200",
//             year: 1990,
//             color: "silver",
//             type: "sedan",
//             engine: "eng200",
//             volume: 2,
//             power: 180
//         },
//         {
//             producer: "mercedes",
//             model: "e63",
//             year: 2017,
//             color: "yellow",
//             type: "sedan",
//             engine: "amg63",
//             volume: 3,
//             power: 400
//         },
//         {
//             producer: "mercedes",
//             model: "c250",
//             year: 2017,
//             color: "red",
//             type: "sedan",
//             engine: "eng25",
//             volume: 2.5,
//             power: 230
//         }
//     ];
//
// // Відфільтрувати масив за наступними крітеріями :
// //     - двигун більше 3х літрів
//
//     console.log('_________________ двигун більше 3х літрів ________________________');
//
//     let volumeOver3l = cars.filter(val => val.volume > 3);
//
//     console.log(volumeOver3l);
//
// // - двигун = 2л
//
//     console.log('_________________ двигун = 2л ________________________');
//
//     let volume2L = cars.filter(car => car.volume === 2);
//
//     console.log(volume2L);
//
// // - виробник мерс
//
//     console.log('_________________ виробник мерс ________________________');
//
//     let mers = cars.filter(car => car.producer === 'mercedes');
//
//     console.log(mers);
//
// // - двигун більше 3х літрів + виробник мерседес
//
//     console.log('_________________ двигун більше 3х літрів + виробник мерседес ________________________');
//
//     let mersVolume3L = cars.filter(car => (car.volume >= 3 && car.producer === 'mercedes'));
//
//     console.log(mersVolume3L);
//
// // - двигун більше 3х літрів + виробник субару
//
//     console.log('_________________ двигун більше 3х літрів + виробник субару ________________________');
//
//     let subaruVolume3L = cars.filter(car => car.volume >= 3 && car.producer === 'subaru');
//
//     console.log(subaruVolume3L);
//
// // - сили більше ніж 300
//
//     console.log('_________________ сили більше ніж 300 ________________________');
//
//     let powerOver300 = cars.filter(car => car.power >= 300);
//
//     console.log(powerOver300);
//
// // - сили більше ніж 300 + виробник субару
//
//     console.log('_________________ сили більше ніж 300 + виробник субару ________________________');
//
//     let subaruPowerOver300 = cars.filter(car => car.power >= 300 && car.producer === 'subaru');
//
//     console.log(subaruPowerOver300);
//
// // - мотор серіі ej
//
//     console.log('_________________ мотор серіі ej ________________________');
//
//     let engineSerEj = cars.filter(car => car.engine.startsWith('ej'));
//
//     console.log(engineSerEj);
//
// // - сили більше ніж 300 + виробник субару + мотор серіі ej
//
//     console.log('_________________ сили більше ніж 300 + виробник субару + мотор серіі ej ________________________');
//
//     let subaruEj300 = cars.filter(car => car.power >= 300 && car.producer === 'subaru' && car.engine.startsWith('ej'));
//
//     console.log(subaruEj300);
//
// // - двигун меньше 3х літрів + виробник мерседес
//
//     console.log('_________________ двигун меньше 3х літрів + виробник мерседес ________________________');
//
//     let mersUnder3L = cars.filter(car => car.producer === 'mercedes' && car.volume < 3);
//
//     console.log(mersUnder3L);
//
// // - двигун більше 2л + сили більше 250
//
//     console.log('_________________ двигун більше 2л + сили більше 250 ________________________');
//
//     let volOver2LPowerOver250 = cars.filter(car => car.power > 250 && car.volume > 2);
//
//     console.log(volOver2LPowerOver250);
//
// // - сили більше 250  + виробник бмв
//
//     console.log('_________________ сили більше 250  + виробник бмв ________________________');
//
//     let bmvPowerOver250 = cars.filter(car => car.power > 250 && car.producer === 'bmw');
//
//     console.log(bmvPowerOver250);
//
//     console.log('_____________________________________________________________________');
//
// }

////================================ 6 =================================================================================
// // - взять слдующий массив
// {
//     let usersWithAddress = [{
//         id: 1,
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {city: 'Lviv', street: 'Shevchenko', number: 16}
//     }, {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, {
//         id: 3,
//         name: 'kolya',
//         age: 29,
//         status: true,
//         address: {city: 'Lviv', street: 'Shevchenko', number: 121}
//     }, {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, {
//         id: 5,
//         name: 'max',
//         age: 30,
//         status: true,
//         address: {city: 'Lviv', street: 'Shevchenko', number: 115}
//     }, {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, {
//         id: 7,
//         name: 'oleg',
//         age: 28,
//         status: false,
//         address: {city: 'Lviv', street: 'Shevchenko', number: 22}
//     }, {
//         id: 8,
//         name: 'andrey',
//         age: 29,
//         status: true,
//         address: {city: 'Lviv', street: 'Shevchenko', number: 43}
//     }, {
//         id: 9,
//         name: 'masha',
//         age: 30,
//         status: true,
//         address: {city: 'Lviv', street: 'Shevchenko', number: 12}
//     }, {
//         id: 10,
//         name: 'olya',
//         age: 31,
//         status: false,
//         address: {city: 'Lviv', street: 'Shevchenko', number: 16}
//     }, {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
//
// // -- отсортировать его по id пользователей
//
//     console.log('_____________ отсортировать его по id пользователей _____________');
//
//     usersWithAddress.sort((user1, user2) => user1.id - user2.id);
//
//     console.log(usersWithAddress);
//
// // -- отсортировать его по id пользователей в обратном опрядке
//
//     console.log('_____________ по id пользователей в обратном опрядке _____________');
//
//     usersWithAddress.sort((user1, user2) => user2.id - user1.id);
//
//     console.log(usersWithAddress);
//
// // -- отсортировать его по возрасту пользователей
//
//     console.log('_____________ по возрасту пользователей _____________');
//
//     usersWithAddress.sort((user1, user2) => user1.age - user2.age);
//
//     console.log(usersWithAddress);
//
// // -- отсортировать его по возрасту пользователей в обратном порядке
//
//     console.log('_____________ по возрасту в обратном порядке _____________');
//
//     usersWithAddress.sort((user1, user2) => user2.age - user1.age);
//
//     console.log(usersWithAddress);
//
// // -- отсортировать его по имени пользователей
//
//     console.log('_____________ по имени пользователей _____________');
//
//     usersWithAddress.sort((user1, user2) => {
//         if (user2.name > user1.name) {
//             return -1;
//         }
//         if (user1.name > user2.name) {
//             return 1;
//         }
//         return 0;
//     });
//
//     console.log(usersWithAddress);
//
// // -- отсортировать его по имени пользователей в обратном порядке
//
//     console.log('_____________ по имени в обратном порядке _____________');
//
//     usersWithAddress.sort((user1, user2) => {
//         if (user2.name > user1.name) {
//             return 1;
//         }
//         if (user1.name > user2.name) {
//             return -1;
//         }
//         return 0;
//     });
//
//     console.log(usersWithAddress);
//
// // -- отсортировать его по названию улицы  в алфавитном порядке
//
//     console.log('_____________ по названию улицы  в алфавитном порядке _____________');
//
//     usersWithAddress.sort((user1, user2) => {
//         if (user2.address.street > user1.address.street) {
//             return -1;
//         }
//         if (user1.address.street > user2.address.street) {
//             return 1;
//         }
//         return 0;
//     });
//
//     console.log(usersWithAddress);
//
// // -- отсортировать его по номеру дома по возрастанию
//
//     console.log('_____________ по номеру дома по возрастанию _____________');
//
//     usersWithAddress.sort((user1, user2) => {
//         if (user2.address.number > user1.address.number) {
//             return -1;
//         }
//         if (user1.address.number > user2.address.number) {
//             return 1;
//         }
//         return 0;
//     });
//
//     console.log(usersWithAddress);
//
// // -- отфильтровать (оставить) тех кто младше 30
//
//     console.log('_____________ отфильтровать (оставить) тех кто младше 30 _____________');
//
//     let ageUnder30 = usersWithAddress.filter(user => user.age < 30);
//
//     console.log(ageUnder30);
//
// // -- отфильтровать (оставить) тех у кого отрицательный статус
//
//     console.log('_____________ тех у кого отрицательный статус _____________');
//
//     let statusFalse = usersWithAddress.filter(user => !user.status);
//
//     console.log(statusFalse);
//
// // -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
//
//     console.log('_____________ отрицательный статус и младше 30 лет _____________');
//
//     let statusAge = usersWithAddress.filter(user => !user.status && user.age < 30);
//
//     console.log(statusAge);
//
// // -- отфильтровать (оставить) тех у кого номер дома четный
//
//     console.log('_____________ номер дома четный _____________');
//
//     let nuberHouseEven = usersWithAddress.filter(user => !(user.address.number % 2));
//
//     console.log(nuberHouseEven);
//
//     console.log('____________________________________________________');
//
// }

////================================ 7 =================================================================================
// // ===========================
// // ======ДОПОЛНИТЕЛЬНО========
// // ===========================
// {
// // Створити обєкт автомобіля з полями:
// //     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// //     Власник автомобіля теж має бути обєкт, у якого є поля
// // Імя, вік, стаж водіння.
// //     Створити не менше 7 та не більше 20 машинок.
//
//     class Car {
//         constructor(brand, power, price, year, name, age, experience) {
//             this.brand = brand;
//             this.power = power;
//             this.price = price;
//             this.year = year;
//             this.driver = {
//                 name, age, experience
//             };
//         }
//     }
//
//     let cars = [
//         new Car('vedro', 200, 100, 1890, 'pedro', 30, 4),
//         new Car('ferara', 270, 1000, 1994, 'Wu', 42, 12),
//         new Car('konjaka', 1, 1200, 2008, 'chapaev', 48, 29),
//         new Car('belaz', 2700, 100000, 1994, 'ivan', 42, 12),
//         new Car('volvo', 150, 1000, 1995, 'chelentano', 89, 70),
//         new Car('kraz', 1700, 1040000, 1994, 'nestor', 26, 4),
//         new Car('laz', 2000, 1500000, 1980, 'stepan', 20, 2),
//         new Car('ford', 350, 102000, 1994, 'tramp', 60, 19),
//         new Car('lada-sedan-baklajan', 250, 3000, 1990, 'ashot', 39, 25),
//         new Car('renault', 300, 121000, 2010, 'makron', 42, 12),
//         new Car('mercedes', 450, 130000, 2004, 'Merkel', 69, 15),
//         new Car('ferrero-roshen', 12, 24.50, 2004, 'petro', 64, 45),
//         new Car('stupa', 40, 12500, 1490, 'Jaga', 30, 22),
//         new Car('metla', 32, 12300, 1608, 'Klara', 30, 1),
//         new Car('brevno', 1, 2, 1943, 'ignat', 65, 55),
//         new Car('mazda', 340, 10000, 1994, 'gomes', 25, 3)
//     ];
//
//     console.log('-------------- Cars ------------------')
//     console.log(cars);
// //     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної
// //     потужності).
//
//     cars.forEach((car, index) => {
//         if (index % 2 === 0) {
//             car.power = +(car.power * 1.1).toFixed(1);
//             car.price = +(car.price * 1.05).toFixed(1);     //та ціну на 5%
//         }
//     });
//
//     console.log('-------------- Cars power up 10% price up 5% ------------------')
//     console.log(cars);
//
// // На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
//
//     let driversNames = ['marat', 'plakat', 'semen', 'pero', 'doshka', 'fedor', 'sigizmund', 'valaduj'];
//
//     class Driver {
//         constructor(name) {
//             this.name = name;
//             this.age = +(Math.random() * 100).toFixed();
//             this.exp = +(Math.random() * 50).toFixed();
//         }
//     }
//
//     let count = 0;
//     cars.forEach((car, index) => {
//         if (index % 2 === 0) {
//             car.driver = new Driver(driversNames[count]);
//             count++;
//         }
//     });
//
//     console.log('-------------- найняти нових водіїв ------------------')
//     console.log(cars);
//
// // Для початку вкладіть всі наші створені автомобілі в масив cars.
// //     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// // Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
// // то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//
//     cars.forEach((car, index) => {
//         if (car.driver.experience < 5 && car.driver.age >= 25) {
//             car.driver.experience += 1;
//         }
//     });
//
//     console.log('-------------- підвищення кваліфікації ------------------')
//     console.log(cars);
//
// //     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
//
//     let sum = cars.reduce((acc, car) => acc + car.price, 0);
//
//     console.log('-------------- сумa, якa потрібнa потратити для покупки всіх авто ------------------')
//     console.log(`${sum} hrn`);
//
//     console.log('--------------************************------------------')
// }

////================================ 8 =================================================================================
// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс
// заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.
{
    let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];

    function minMaxIndex(num, arr) {

        let MinIndex = arr.indexOf(num);
        let MaxIndex = arr.lastIndexOf(num);

        if(MinIndex < 0) {
            console.log(-1);
        }else{
            console.log(`MinIndex = ${MinIndex}
                MaxIndex = ${MaxIndex}`);
        }
    }

    minMaxIndex(10, arr);
}