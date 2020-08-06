////============================ BONUS VIKTOR ==========================================================================

////======================== 1 =========================================================================================
// Необхіжно реалізувати друкарську машинку.
//     У вас є інпут. Ви в нього ввожите якусь слово і тицькаєте кнопку "друкувати".
//
//     Після того як ви тикнули кнопку вам необхідно запустити функцію яка буде друкувтаи на строніці то, шо ви ввели
//     по одній букві з рандомною затримкою від 0.1 до 0.5 секунд.
//     Тим самим симулюючи друкування цього тексту реальною людиною.
//     НА КОЖНУ БУКВА РІЗНА ЗАТРИМКА !

let inputTextField = document.typewriterInput.inputText;
let printBTN = document.querySelector('.typewriter-print-btn');
let outputTextField = document.querySelector('.typewriter-print-text');

function printChar(char, field) {
    return new Promise(resolve => {
        setTimeout(() => {
            field.innerHTML += char;
            resolve();
        }, (Math.random() * 400) - 100);
    });
}

function btnEnable(btn) {
    return new Promise(resolve => {
        setTimeout(() => {
            if(btn.hasAttribute('disabled')){
                btn.removeAttribute('disabled');
                resolve();
            }
        });
    });
}

async function printText(text,field,btn) {
    for (const char of text) {
        await printChar(char, field);
    }
    await btnEnable(btn);
}

printBTN.onclick = (e) => {
    outputTextField.innerHTML = '';
    e.target.setAttribute('disabled', 'disabled');
    printText(inputTextField.value, outputTextField, e.target);
};

////========================= 2 ========================================================================================

// Даны два целых числа A и В (каждое в отдельной строке).
// Выведите все числа от A до B включительно, в порядке возрастания,
//     если A < B, или в порядке убывания в противном случае.
//
//     ##########################################################
//
//     Точная степень двойки
// Дано натуральное число N.
//     Выведите слово YES, если число N является точной степенью двойки, или слово NO в противном случае.
//     Операцией возведения в степень пользоваться нельзя!
//
//     #####################################################################
//     Сумма цифр числа
// Дано натуральное число N. Вычислите сумму его цифр.
//     При решении этой задачи нельзя использовать строки,
//     списки, массивы ну и циклы, разумеется.
//
//     #####################################################################
//     Цифры числа справа налево
// Дано натуральное число N.
//     Выведите все его цифры по одной, в обратном порядке, разделяя их пробелами или новыми строками.
//     При решении этой задачи нельзя использовать строки, списки, массивы (ну и циклы, разумеется).
// Разрешена только рекурсия и целочисленная арифметика.
//
//     #####################################################################
//
//     Палиндром
// Дано слово, состоящее только из строчных латинских букв. Проверьте, является ли это слово палиндромом. Выведите YES или NO.
//     При решении этой задачи нельзя пользоваться циклами, в решениях на питоне нельзя использовать срезы с шагом, отличным от 1.
//
//
// #####################################################################
//
//     Вывести нечетные числа последовательности
// Дана последовательность натуральных чисел (одно число в строке), завершающаяся числом 0. Выведите все нечетные числа из этой последовательности, сохраняя их порядок.
//     В этой задаче нельзя использовать глобальные переменные и передавать какие-либо параметры в рекурсивную функцию. Функция получает данные, считывая их с клавиатуры. Функция не возвращает значение, а сразу же выводит результат на экран.
//
//     #####################################################################
//
//     Количество единиц
// Дана последовательность натуральных чисел  в строке, завершающаяся двумя числами 0 подряд. Определите, сколько раз в этой последовательности встречается число 1. Числа, идущие после двух нулей, необходимо игнорировать.
//
//     #####################################################################
//
//     Заданная сумма цифр
// Даны натуральные числа k и s. Определите, сколько существует k-значных натуральных чисел, сумма цифр которых равна s. Запись натурального числа не может начинаться с цифры 0.
// В этой задаче можно использовать цикл для перебора всех цифр, стоящих на какой-либо позиции.
//
//     #####################################################################
//
//     Без двух нулей
// Даны числа a и b. Определите, сколько существует
// последовательностей из a нулей и b единиц, в которых никакие два нуля не стоят рядом.