////========================================= HOME WORK 9 ==============================================================

// //////============================== 1 ===================================================================================
// //
// // //Розпорядок дня коллбеками
//
// function myDayCB(isPossible, cb) {
//     setTimeout(() => {
//         if (isPossible) {
//             cb(null, 'Прокатило');
//         } else {
//             cb('Шось пішло не так.');
//         }
//     }, +(Math.random() * 5000).toFixed());
// }
//
// myDayCB(true, (err, rew) => {
//     if (rew) {
//         console.log('Прокинувся');
//         myDayCB(true, (err, rew) => {
//             if (rew) {
//                 console.log('Почистив зуби');
//                 myDayCB(true, (err, rew) => {
//                     if (rew) {
//                         console.log('Одягнувся');
//                         myDayCB(true, (err, rew) => {
//                             if (rew) {
//                                 console.log('Поснідав');
//                                 myDayCB(false, (err, rew) => {
//                                     if (rew) {
//                                         console.log('Пішов на роботу');
//                                         myDayCB(true, (err, rew) => {
//                                             if (rew) {
//                                                 console.log('Попрацював');
//                                                 myDayCB(true, (err, rew) => {
//                                                     if (rew) {
//                                                         console.log('Пішов додому');
//                                                         myDayCB(true, (err, rew) => {
//                                                             if (rew) {
//                                                                 console.log('Роздягнувся');
//                                                                 myDayCB(true, (err, rew) => {
//                                                                     if (rew) {
//                                                                         console.log('Повечеряв');
//                                                                         myDayCB(true, (err, rew) => {
//                                                                             if (rew) {
//                                                                                 console.log('Ліг спати');
//                                                                                 myDayCB(true, (err, rew) => {
//
//                                                                                 });
//                                                                             } else {
//                                                                                 console.log(err + ' Мабуть помер...');
//                                                                             }
//                                                                         });
//                                                                     } else {
//                                                                         console.log(err + ' Нема шо їсти...');
//                                                                     }
//                                                                 });
//                                                             } else {
//                                                                 console.log(err + ' Вирубився одягнений...');
//                                                             }
//                                                         });
//                                                     } else {
//                                                         console.log(err + ' Нема дому...');
//                                                     }
//                                                 });
//                                             } else {
//                                                 console.log(err + ' Звільнили...');
//                                             }
//                                         });
//                                     } else {
//                                         console.log(err + ' Нема роботи...');
//                                     }
//                                 });
//                             } else {
//                                 console.log(err + ' Нема шо їсти...');
//                             }
//                         });
//                     } else {
//                         console.log(err + ' А де одяг?...');
//                     }
//                 });
//             } else {
//                 console.log(err + ' Нема пасти...');
//             }
//         });
//     } else {
//         console.log(err + ' Мабуть помер...');
//     }
// });

////============================== 2 ===================================================================================
//
// //Розпорядок дня проміси
//
function myDayPromise(isPossible, msg) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isPossible) {
                resolve({isPos: true, msg});
            } else {
                reject({isPos: false, msg});
            }
        }, +(Math.random() * 5000).toFixed());
    });
}
//
// myDayPromise(true, 'Прокинувся')
//     .then(value => {
//         console.log(value.msg);
//         return myDayPromise(value.isPos, 'Почистив зуби');
//     })
//     .then(value => {
//         console.log(value.msg);
//         return myDayPromise(value.isPos, 'Одягнувся');
//     })
//     .then(value => {
//         console.log(value.msg);
//         return myDayPromise(value.isPos, 'Поснідав');
//     })
//     .then(value => {
//         console.log(value.msg);
//         return myDayPromise(value.isPos, 'Пішов на роботу');
//     })
//     .then(value => {
//         console.log(value.msg);
//         return myDayPromise(false, 'Карантін пішов додому спати');
//     })
//     .then(value => {
//         console.log(value.msg);
//         return myDayPromise(value.isPos, 'Пішов додому');
//     })
//     .then(value => {
//         console.log(value.msg);
//         return myDayPromise(value.isPos, 'Роздягнувся');
//     })
//     .then(value => {
//         console.log(value.msg);
//         return myDayPromise(value.isPos, 'Повечеряв');
//     })
//     .then(value => {
//         console.log(value.msg);
//         return myDayPromise(value.isPos, 'Ліг спати');
//     })
//     .catch(value => {
//         console.log(value.msg);
//     });

////============================== 3 ===================================================================================

//Розпорядок дня асінки

async function myDayAsync() {
    try {
        let prokid = await myDayPromise(true, 'Прокинувся');
        console.log(prokid.msg);
        console.log('--------------');

        let zubi = await myDayPromise(true, 'Почистив зуби');
        console.log(zubi.msg);
        console.log('--------------');

        let odyag = await myDayPromise(true, 'Одягнувся');
        console.log(odyag.msg);
        console.log('--------------');

        let snidanok = await myDayPromise(true, 'Поснідав');
        console.log(snidanok.msg);
        console.log('--------------');

        let robot = await myDayPromise(true, 'Пішов на роботу');
        console.log(robot.msg);
        console.log('--------------');

        let praca = await myDayPromise(false, 'Згадав шо відпустка, пішов додому спати');
        console.log(praca.msg);
        console.log('--------------');

        let dodomu = await myDayPromise(true, 'Пішов додому');
        console.log(dodomu.msg);
        console.log('--------------');

        let rozdjagnuvca = await myDayPromise(true, 'Роздягнувся');
        console.log(rozdjagnuvca.msg);
        console.log('--------------');

        let vechera = await myDayPromise(true, 'Повечеряв');
        console.log(vechera.msg);
        console.log('--------------');

        let spatu = await myDayPromise(true, 'Ліг спати');
        console.log(spatu.msg);
        console.log('--------------');
    } catch (e) {
        console.log(e.msg);
    }
}

myDayAsync();


