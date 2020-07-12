////================================================== HOME WORK 2 =======================================================
//
//// ==================================================== 1 ==============================================================
//// --створити масив та вивести його в консоль:
////     - з 5 числових значень
//// - з 5 стічкових значень
//// - з 5 значень стрічкового, числового та булевого типу

// {
//     let arrNum = [1, 2, 3, 4, 5];
//     console.log(arrNum);
//
//     let arrStr = ['one', 'two', 'three', 'four', 'five'];
//     console.log(arrStr);
//
//     let arrAll = [false, true, 2, 'three', 4];
//     console.log(arrAll);
// }

//// ==================================================== 2 ==============================================================

// // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
// {
//     let arrEmpty = [];
//     arrEmpty[1] = 'two';
//     arrEmpty[4] = 5;
//     arrEmpty[12] = true;
//     arrEmpty[5] = [1, 2];
//     arrEmpty[9] = 13;
//
//     console.log(arrEmpty);
// }

//// ==================================================== 3 ==============================================================

// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//
// for (let i = 0; i < 10; i++) {
//     document.write(`<div> Divka ${i + 1} </div>`);
// }

//// ==================================================== 4 ==============================================================
//// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div> Divka ${i + 1} index ${i}</div>`);
// }

//// ==================================================== 5 ==============================================================
//// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
//
// while (i < 20){
//     document.write(`<h1> Header ${i + 1}</h1>`);
//     i++;
// }

//// ==================================================== 6 ==============================================================
//// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
//
// while (i < 20){
//     document.write(`<h1> Header ${i + 1} index ${i}</h1>`);
//     i++;
// }

//// ==================================================== 7 ==============================================================
// // - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//
// {
//     let arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
//     for (let i = 0; i < arrNumbers.length; i++) {
//         console.log(arrNumbers[i]);
//     }
// }

//// ==================================================== 8 ==============================================================
// // - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//
// {
//     let arrStrings = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
//
//     for (let i = 0; i < arrStrings.length; i++) {
//         console.log(arrStrings[i]);
//     }
// }

//// ==================================================== 9 =============================================================
// // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//
// {
//     let arr = ['1', true, 12, '4', false, 6, 7, 8, '9', '10'];
//
//     for (let i = 0; i < arr.length; i++) {
//         const arrElement = arr[i];
//         console.log(arrElement);
//     }
// }

//// ==================================================== 10 ==============================================================
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof
// // вивести тільки булеві елементи
//
// {
//     let arr = ['1', true, 12, '4', false, 6, true, 8, '9', false];
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'boolean'){
//             console.log(arr[i]);
//         }
//     }
// }

//// ==================================================== 11 ==============================================================
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof
// // вивести тільки числові елементи
//
// {
//     let arr = ['1', true, 12, '4', false, 6, true, 8, '9', false];
//      for (let i = 0; i < arr.length; i++) {
//          if (typeof arr[i] === 'number'){
//              console.log(arr[i]);
//          }
//      }
// }

//// ==================================================== 12 ==============================================================
// // - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof
// // вивести тільки рядкові елементи
//
// {
//     let arr = ['1', true, 12, '4', false, 6, true, 8, '9', false];
//      for (let i = 0; i < arr.length; i++) {
//          if (typeof arr[i] === 'string'){
//              console.log(arr[i]);
//          }
//      }
// }

//// ==================================================== 13 ==============================================================
// // - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// // Вивести в консоль всі його елементи в циклі.
//
// {
//     let arr = [];
//     arr[0] = [1, 3, 5];
//     arr[1] = 1;
//     arr[2] = false;
//     arr[3] = 'string';
//     arr[4] = 'rembo';
//     arr[5] = 44;
//     arr[6] = true;
//     arr[7] = 33;
//     arr[9] = null;
//
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }

//// ==================================================== 14 ==============================================================
// // - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(`<div>${i}</div>`);
// }

//// ==================================================== 15 ==============================================================
// // - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(`<div>${i}</div>`);
// }

//// ==================================================== 16 ==============================================================
// // - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0; i < 100; i += 2) {
//     console.log(i);
//     document.write(`<div>${i}</div>`);
// }

//// ==================================================== 17 ==============================================================
// // - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//         document.write(`<div>${i}</div>`);
//     }
// }

//// ==================================================== 18 ==============================================================
// // - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//         document.write(`<div>${i}</div>`);
//     }
// }

//// ==================================================== 19 ==============================================================
// // - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
//
// for (let i = 0; i < 2; i++) {
//     for (let j = 0; j < 60; j++) {
//         if (j < 10) {
//             console.log(`0${i}:0${j}`);
//         } else {
//             console.log(`0${i}:${j}`);
//         }
//     }
// }

//// ==================================================== 20 ==============================================================
// // - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
//
// for (let i = 0; i < 3; i++) {
//     let h = `0${i}`;
//     for (let j = 0; j < 60; j++) {
//         let m = (j < 10) ? `0${j}` : j;
//         for (let k = 0; k < 60; k++) {
//             let s = (k < 10) ? `0${k}` : k;
//             if (h === '02' && m >= 20) {
//                 break;
//             } else {
//                 console.log(`${h}:${m}:${s}`);
//             }
//         }
//     }
// }

//// ==================================================== 21 ==============================================================
// // Додатково
// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
//
// {
//     let arr = ['a', 'b', 'c'];
//     let str = '';
//
//     for (let i = 0; i < arr.length; i++) {
//         str += arr[i];
//     }
//
//     console.log(str);
// }

//// ==================================================== 22 ==============================================================
// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
//
// {
//     let arr = ['a', 'b', 'c'];
//     let str = '';
//     let i = 0;
//
//     while (i < arr.length){
//         str += arr[i];
//         i++;
//     }
//     console.log(str);
// }

//// ==================================================== 23 ==============================================================
// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
//
// {
//     let arr = ['a', 'b', 'c'];
//     let str = '';
//
//     for (const el of arr) {
//         str += el;
//     }
//
//     console.log(str);
// }


//// =================
//// =================
//// =================
//// =================
//// ==================================================== 24 ==============================================================
// // - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
//
// {
//     let arr = ['a', 'b', 'c'];
//
//     for (let i = 0; i < 3; i++) {
//         arr.push(i+1);
//     }
//     console.log(arr);
// }

//// ==================================================== 25 ==============================================================
// // - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
//
// {
//     let arr = [1, 2, 3];
//
//     for (let i = 0; i < arr.length-1; i++) {
//         for (let j = 1; j < arr.length; j++) {
//             if(arr[i] < arr[j]){
//                 let a = arr[j];
//                 arr[j] = arr[i];
//                 arr[i] = a;
//             }
//         }
//     }
//     console.log(arr);
// }

//// ==================================================== 26 ==============================================================
// // - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
//
// {
//     let arr = [1, 2, 3];
//     for (let i = 0; i < 3; i++) {
//         arr.push(i + 4);
//     }
//
//     console.log(arr);
// }

//// ==================================================== 27 ==============================================================
// // - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
//
// {
//     let arr = [1, 2, 3];
//     for (let i = 2; i >= 0; i--) {
//         arr.unshift(i + 4);
//     }
//
//     console.log(arr);
// }

//// ==================================================== 28 ==============================================================
// // - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
//
// {
//     let arr = ['js', 'css', 'jq'];
//     let shifted = arr.shift();
//
//     console.log(shifted);
// }

//// ==================================================== 29 ==============================================================
// // - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
//
// {
//     let arr = ['js', 'css', 'jq'];
//     let popped = arr.pop();
//
//     console.log(popped);
// }

//// ==================================================== 30 ==============================================================
// // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
//
// {
//     let arr = [1, 2, 3, 4, 5];
//     let sliced = arr.slice(3);
//     console.log(sliced);
// }

//// ==================================================== 31 ==============================================================
// // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
//
// {
//     let arr = [1, 2, 3, 4, 5];
//     let sliced = arr.slice(0,2);
//     console.log(sliced);
// }

//// ==================================================== 32 ==============================================================
// // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
//
// {
//     let arr = [1, 2, 3, 4, 5];
//     arr.splice(1, 2);
//     console.log(arr);
// }

//// ==================================================== 33 ==============================================================
// // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
//
// {
//     let arr = [1, 2, 3, 4, 5];
//     let arrStr = ['a', 'b', 'c'];
//     arr.splice(3, 0, ...arrStr);
//
//     console.log(arr);
// }

//// ==================================================== 34 ==============================================================
// // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//
// {
//     let arr = [1, 2, 3, 4, 5];
//     arr.splice(1, 0, 'a', 'b');
//     arr.splice(6, 0, 'c');
//     arr.splice(8, 0, 'e');
//
//     console.log(arr);
// }

//// ==================================================== 35 ==============================================================
// // - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
// {
//     let numberArr = [];
//     for (let i = 0; i < 10; i++) {
//         numberArr[i] = +(Math.random() * 100).toFixed(0);
//     }
//
//     for (const el of numberArr) {
//         if(el%2===0){
//             console.log(el);
//         }
//     }
// }

//// ==================================================== 36 ==============================================================
// // - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push ()
// // скопіювати значення одного масиву в інший
//
// {
//     let numberArr = [];
//     let numberArr2 = [];
//     for (let i = 0; i < 10; i++) {
//         numberArr[i] = +(Math.random() * 100).toFixed(0);
//     }
//
//     for (const el of numberArr) {
//         numberArr2.push(el);
//     }
//
//     console.log(numberArr);
//     console.log('-------------------------------');
//     console.log(numberArr2);
// }

//// ==================================================== 37 ==============================================================
// // - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати
// // значення одного масиву в інший.
//
// {
//     let numberArr = [];
//     let numberArr2 = [];
//     for (let i = 0; i < 10; i++) {
//         numberArr[i] = +(Math.random() * 100).toFixed(0);
//     }
//
//     for (let i = 0; i < numberArr.length; i++) {
//         numberArr2[i] = numberArr[i];
//     }
//
//     console.log(numberArr);
//     console.log('-------------------------------');
//     console.log(numberArr2);
// }


//// ============
//// ==================================================== 38 ==============================================================
// // зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// {
//     let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// //     1. перебрати його циклом while
//
//     {
//         console.log('======================= while ==================================')
//         let i = 0;
//
//         while (i < array.length) {
//             console.log(array[i]);
//             i++;
//         }
//         console.log('======================= while ==================================')
//     }
//
// //     2. перебрати його циклом for
//
//     {
//         console.log('======================= for ==================================');
//         for (let i = 0; i < array.length; i++) {
//             console.log(array[i]);
//         }
//         console.log('======================= for ==================================');
//     }
//
// //     3. перебрати циклом while та вивести  числа тільки з непарним індексом
//
//     {
//         console.log('======================= while. even index ==================================');
//         let i = 0;
//         while (i < array.length) {
//             if (i % 2 !== 0 && i !== 0) {
//                 console.log(array[i]);
//             }
//             i++;
//         }
//         console.log('======================= while. even index ==================================');
//     }
//
// //     4. перебрати циклом for та вивести  числа тільки з непарним індексом
//
//     {
//         console.log('======================= for. even index ==================================');
//         for (let i = 0; i < array.length; i++) {
//             if (i % 2 !== 0 && i !== 0) {
//                 console.log(array[i]);
//             }
//         }
//         console.log('======================= for. even index ==================================');
//     }
//
// //    5. перебрати циклом while та вивести  числа тільки парні  значення
//
//     {
//         console.log('======================= while. odd value ==================================');
//         let i = 0;
//         while (i < array.length) {
//             if (array[i] % 2 === 0) {
//                 console.log(array[i]);
//             }
//             i++;
//         }
//         console.log('======================= while. odd value ==================================');
//     }
//
// //    6. перебрати циклом for та вивести  числа тільки парні  значення
//
//     {
//         console.log('======================= for. odd value ==================================');
//         for (let i = 0; i < array.length; i++) {
//             if (array[i] % 2 === 0) {
//                 console.log(array[i]);
//             }
//         }
//         console.log('======================= for. odd value ==================================');
//     }
//
// ////     7. замінити кожне число кратне 3 на слово "okten"
//
//     // {
//     //     console.log('======================= okten ==================================');
//     //     for (let i = 0; i < array.length; i++) {
//     //         if (array[i] % 3 === 0) {
//     //             array[i] = 'okten';
//     //         }
//     //     }
//     //
//     //     console.log(array);
//     //     console.log('======================= okten ==================================');
//     // }
//
// //     8. вивести масив в зворотньому порядку.
//
//     {
//         console.log('======================= reverse ==================================');
//
//         let revArr = [];
//         for (const el of array) {
//             revArr.unshift(el);
//         }
//
//         console.log(revArr);
//         console.log('======================= reverse ==================================');
//     }
//
// //     9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//
//     {
//         {
//             console.log('======================= while reverse ==================================')
//             let i = 0;
//
//             while (i < array.length) {
//                 console.log(array[array.length-(i+1)]);
//                 i++;
//             }
//             console.log('======================= while reverse ==================================')
//         }
//
// //     2. перебрати його циклом for
//
//         {
//             console.log('======================= for reverse==================================');
//             for (let i = 0; i < array.length; i++) {
//                 console.log(array[array.length-(i+1)]);
//             }
//             console.log('======================= for reverse==================================');
//         }
//
// //     3. перебрати циклом while та вивести  числа тільки з непарним індексом
//
//         {
//             console.log('======================= while. even index  reverse==================================');
//             let i = array.length;
//             while (i >= 0) {
//                 if (i % 2 !== 0 && i !== 0) {
//                     console.log(array[i]);
//                 }
//                 i--;
//             }
//             console.log('======================= while. even index reverse==================================');
//         }
//
// //     4. перебрати циклом for та вивести  числа тільки з непарним індексом
//
//         {
//             console.log('======================= for. even index reverse==================================');
//             for (let i = array.length; i >= 0; i--) {
//                 if (i % 2 !== 0 && i !== 0) {
//                     console.log(array[i]);
//                 }
//             }
//             console.log('======================= for. even index reverse==================================');
//         }
//
// //    5. перебрати циклом while та вивести  числа тільки парні  значення
//
//         {
//             console.log('======================= while. odd value reverse==================================');
//             let i = array.length;
//             while (i >= 0) {
//                 if (array[i] % 2 === 0) {
//                     console.log(array[i]);
//                 }
//                 i--;
//             }
//             console.log('======================= while. odd value reverse==================================');
//         }
//
// //    6. перебрати циклом for та вивести  числа тільки парні  значення
//
//         {
//             console.log('======================= for. odd value reverse==================================');
//             for (let i = array.length; i >= 0; i--) {
//                 if (array[i] % 2 === 0) {
//                     console.log(array[i]);
//                 }
//             }
//             console.log('======================= for. odd value reverse==================================');
//         }
//
// //     7. замінити кожне число кратне 3 на слово "okten"
//
//         {
//             console.log('======================= okten reverse==================================');
//
//             let reverseArr = [];
//             for (const el of array) {
//                 reverseArr.unshift(el);
//             }
//             for (let i = reverseArr.length; i >= 0; i--) {
//                 if (reverseArr[i] % 3 === 0) {
//                     reverseArr[i] = 'okten';
//                 }
//             }
//
//             console.log(reverseArr);
//             console.log('======================= okten reverse==================================');
//         }
//
//     }
//
//// ==================================================== 39 ==============================================================
// //     10. створити пустий масив та :
//     {
//         let emptyArr = [];
//
// // //       - заповнити його 50 парними числами за допомоги циклу.
// //
// //         {
////               console.log('======================= empty arr even==================================');
// //             for (let i = 0; i < 50; i++) {
// //                 let num = +(Math.random() * 100).toFixed(0);
// //                 if(num%2 !== 0){
// //                     emptyArr[i] = num * 2;
// //                 }else{
// //                     emptyArr[i] = num;
// //                 }
// //             }
// //
// //             console.log(emptyArr);
////               console.log('======================= empty arr even==================================');
// //         }
//
// //       - заповнити його 50 непарними числами за допомоги циклу.
//
//         {
//              console.log('======================= empty arr odd==================================');
//             for (let i = 0; i < 50; i++) {
//                 let num = +(Math.random() * 100).toFixed(0);
//                 if(num%2 === 0){
//                     emptyArr[i] = num - 1;
//                 }else{
//                     emptyArr[i] = num;
//                 }
//             }
//
//             console.log(emptyArr);
//              console.log('======================= empty arr odd==================================');
//         }
//     }
// }

//// ==================================================== 40 ==============================================================
// // 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
// //     диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
// {
//     let randomArr = [];
//     for (let i = 0; i < 20; i++) {
//         let num = 0;
//         while (num < 8) {
//             num = +(Math.random() * 732).toFixed(0);
//         }
//         randomArr[i] = num;
//     }
//
//     console.log(randomArr);
//
// // 2. вывести на консоль  каждый третий елемент
//
//     {
//         for (let i = 2; i < randomArr.length; i += 3) {
//             console.log(randomArr[i]);
//         }
//     }
//     console.log('----------------------------------------------');
// // 3. вывести на консоль  каждый третий елемент
// // но при условии что его значение является парным.
//
//     {
//         for (let i = 2; i < randomArr.length; i += 3) {
//             if (randomArr[i] % 2 === 0) {
//                 console.log(randomArr[i]);
//             }
//         }
//     }
//     console.log('----------------------------------------------');
// // 4. вывести на консоль  каждый третий елемент
// // но при условии что он имеет парное значение и
// // записать их в другой массив.
//
//     {
//         let evenRandArr = [];
//
//         for (let i = 2; i < randomArr.length; i += 3) {
//             if (randomArr[i] % 2 === 0) {
//                 evenRandArr.push(randomArr[i]);
//             }
//         }
//
//         console.log(evenRandArr);
//     }
//     console.log('----------------------------------------------');
// // 5. Вывести каждый елемент массива у которого соседний с права элемент - парный
//
//     {
//         for (let i = 0; i < randomArr.length - 1; i++) {
//             if (randomArr[i + 1] % 2 === 0) {
//                 console.log(randomArr[i]);
//             }
//         }
//     }
//     console.log('----------------------------------------------');
// }

//// ==================================================== 41 ==============================================================
// // 5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
//
// {
//     let prices = [100, 250, 50, 168, 120, 345, 188];
//     let averagePrice = 0;
//     let allPrices = 0;
//     for (const price of prices) {
//         allPrices += price;
//     }
//     averagePrice = (allPrices / prices.length).toFixed(2);
//     console.log(averagePrice);
// }

//// ==================================================== 42 ==============================================================
// // 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
//
// {
//     let arrRand = [];
//     for (let i = 0; i < 10; i++) {
//         arrRand[i] = +(Math.random() * 100).toFixed(0);
//     }
//
//     let arrRandCopy = [];
//     for (const el of arrRand) {
//         arrRandCopy.push(el * 5);
//     }
//
//     console.log(arrRand);
//     console.log(arrRandCopy);
// }

//// ==================================================== 43 ==============================================================
// // 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
// // додати його в інший масив.
// {
//     let someArr = [1, true, 'tralala', 4, 'frog', 'derevo', 13, false, 43, 'true'];
//     let anotherArr = [];
//     for (const el of someArr) {
//         if(typeof el === 'number'){
//             anotherArr.push(el);
//         }
//     }
//
//     console.log(someArr);
//     console.log(anotherArr);
// }
