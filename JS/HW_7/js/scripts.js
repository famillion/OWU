////====================================== HOME WORK 7 =================================================================

////=========================== 1 ======================================================================================
// - Создать произвольный елемент с id = text.
// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let hideTestBTN = document.querySelector('.test-and-button button');

// hideTestBTN.addEventListener('click', () => {
//     document.getElementById('test').style.display = 'none';
// });

hideTestBTN.onclick = () => {
    document.getElementById('test').style.display = 'none';
};

////=========================== 2 ======================================================================================
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let hiddenBTN = document.querySelector('.hidden-button button');

hiddenBTN.onclick = () => {
    hiddenBTN.style.display = 'none';
};

////=========================== 3 ======================================================================================
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача

let verifyBTN = document.querySelector('.input-age button');

verifyBTN.addEventListener('click', () => {
    let age = +(document.getElementById('age').value);
    if (age < 0) {
        alert('Realy?');
    } else if (age < 18) {

        alert('Sorry! 18+ only!');
    } else {
        alert('Wellcome!');
    }
});

////=========================== 4 ======================================================================================
// - Создайте меню, которое раскрывается/сворачивается при клике

let menu = document.querySelector('.menu-hidden');

menu.addEventListener('click', (ev) => {
    if (ev.target === menu.children[0]) {
        (menu.children[1].classList.contains('hidden'))
            ? menu.children[1].classList.remove('hidden')
            : menu.children[1].classList.add('hidden');
    }
});

////=========================== 5 ======================================================================================
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

class Comment {
    constructor(title, body) {
        this.title = title;
        this.body = body;
    }
}

let commentsList = [];

for (let i = 0; i < 10; i++) {
    commentsList.push(new Comment(`lorem ${i + 1}`, `Lorem ipsum - coment-${i + 1} - dolor sit amet, consectetur adipisicing elit. Distinctio, ipsa? `))
}

let commentsDiv = document.createElement('div');
commentsDiv.classList.add('comments');

for (const comment of commentsList) {
    let commentItem = document.createElement('div');
    let comTitle = document.createElement('div');
    let comBody = document.createElement('div');
    let hideBtn = document.createElement('button');

    comTitle.innerText = comment.title;
    comTitle.classList.add('comments-items');
    commentItem.appendChild(comTitle);

    comBody.innerText = comment.body;
    comBody.classList.add('comments-items');
    commentItem.appendChild(comBody);

    hideBtn.innerText = 'hide comment';
    hideBtn.style.margin = '5px';
    commentItem.appendChild(hideBtn);

    hideBtn.onclick = () => {
        (comBody.classList.contains('hidden'))
            ? comBody.classList.remove('hidden')
            : comBody.classList.add('hidden');
    };

    commentsDiv.appendChild(commentItem)
}

document.body.appendChild(commentsDiv);

////=========================== 6 ======================================================================================
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та
// виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

class Users {
    constructor(name, surname, email, password) {
        this.form1 = {name, surname};
        this.form2 = {email, password};
    }
}

let parseFormBTN = document.querySelector('.forms-parse-btn');

parseFormBTN.addEventListener('click', () => {
    let name = document.forms.form1.name;
    let surname = document.forms.form1.surname;
    let email = document.forms.form2.email;
    let pass = document.forms.form2.pass;

    console.log(new Users(name.value, surname.value, email.value, pass.value));

    name.value = '';
    surname.value = '';
    email.value = '';
    pass.value = '';
});

////=========================== 7 ======================================================================================
// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.

function createTable(rows, columns, tag) {

    let someTag = document.createElement(tag);
    someTag.classList.add('table');
    let table = document.createElement('table');
    let row = document.createElement('tr');
    let td = document.createElement('td');
    td.style.margin = '5px';
    td.style.width = '40px';
    td.style.height = '10px';
    td.style.backgroundColor = 'aqua';

    for (let i = 0; i < rows; i++) {
        let addRow = row.cloneNode();
        for (let j = 0; j < columns; j++) {
            let addTd = td.cloneNode();
            addRow.appendChild(addTd);
        }
        table.appendChild(addRow);
    }

    someTag.appendChild(table);

    return someTag;
}

// document.body.appendChild(createTable(5, 5, 'div'));

////=========================== 8 ======================================================================================
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

let inputBlock = document.querySelector('.input-table');

let rows = document.forms.tableForm.rows;
let colsT = document.forms.tableForm.cols;
let tagTo = document.forms.tableForm.tag;

let createTabBTN = document.querySelector('.input-table .create-table');

createTabBTN.addEventListener('click', () => {
    inputBlock.appendChild(createTable(rows.value, colsT.value, tagTo.value));
    rows.value = '';
    colsT.value = '';
    tagTo.value = '';
});

////=========================== 9 ======================================================================================
// (Додатковачастина для завдання)
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

let carouselItemsList = document.querySelectorAll('.carousel-item img');
let carouslEl = document.querySelector('.carousel-items');

/////------------ ver 1 --------------------------
// let min = -100 * (carouselItemsList.length - 3);
// let max = 0;
// let pos = max;
//
// document.addEventListener('mousedown', ev => {
//     if (ev.target === document.querySelector('.left') && ev.buttons === 1) {
//         if (pos >= min && pos <= max) {
//             if (pos !== min) {
//                 pos -= 100;
//                 carouslEl.style.transform = `translateX(${pos}px)`;
//             }
//         }
//     }
//     if (ev.target === document.querySelector('.right') && ev.buttons === 1) {
//         if (pos >= min && pos <= max) {
//             if (pos !== max) {
//                 pos += 100;
//                 carouslEl.style.transform = `translateX(${pos}px)`;
//             }
//         }
//     }
// });

/////--------------var 2-----------------------
let imgsSRC = [];

let step = 0;

for (let i = 0; i < carouselItemsList.length; i++) {
    imgsSRC.push(carouselItemsList[i].src);
}


document.addEventListener('mousedown', ev => {
    if (ev.target === document.querySelector('.left') && ev.buttons === 1) {
        step++;
        if (step < carouselItemsList.length - 2) {
            carouselItemsList[0].src = imgsSRC[step];
            carouselItemsList[1].src = imgsSRC[step + 1];
            carouselItemsList[2].src = imgsSRC[step + 2];
        } else if (step === carouselItemsList.length - 2) {
            carouselItemsList[0].src = imgsSRC[carouselItemsList.length - 2];
            carouselItemsList[1].src = imgsSRC[carouselItemsList.length - 1];
            carouselItemsList[2].src = imgsSRC[0];
        } else if (step === carouselItemsList.length - 1) {
            carouselItemsList[0].src = imgsSRC[carouselItemsList.length - 1];
            carouselItemsList[1].src = imgsSRC[0];
            carouselItemsList[2].src = imgsSRC[1];
        } else if (step === carouselItemsList.length) {
            step = 0;
            carouselItemsList[0].src = imgsSRC[step];
            carouselItemsList[1].src = imgsSRC[step + 1];
            carouselItemsList[2].src = imgsSRC[step + 2];
        }
    }
    if (ev.target === document.querySelector('.right') && ev.buttons === 1) {
        step--;
        if (step >= 0 && step < carouselItemsList.length - 2) {
            carouselItemsList[0].src = imgsSRC[step];
            carouselItemsList[1].src = imgsSRC[step + 1];
            carouselItemsList[2].src = imgsSRC[step + 2];
        } else if (step < 0) {
            step = carouselItemsList.length - 1;
            carouselItemsList[0].src = imgsSRC[step];
            carouselItemsList[1].src = imgsSRC[0];
            carouselItemsList[2].src = imgsSRC[1];
        } else if (step === carouselItemsList.length - 2) {
            carouselItemsList[0].src = imgsSRC[step];
            carouselItemsList[1].src = imgsSRC[carouselItemsList.length - 1];
            carouselItemsList[2].src = imgsSRC[0];
        }
    }
});

////=========================== 10 ======================================================================================
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

let matukiArr = [];

for (let i = 0; i < 50; i++) {
    matukiArr.push(`matuk${i}`);
}

let matukWordCheckBTN = document.querySelector('.matuki-word .matuk-word-btn');

matukWordCheckBTN.addEventListener('click', () => {
    if (matukiArr.includes(document.forms.matukWord.word.value)) {
        alert('Ану без матюків тут мені!!!');
    }
    document.forms.matukWord.word.value = '';
});

////=========================== 11 ======================================================================================
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
let matukiTextCheckBTN = document.querySelector('.matuki-text .matuk-text-btn');

// let textToArr = document.forms.matukText.text.value.split(new RegExp('\W\S','gi'));

matukiTextCheckBTN.addEventListener('click', () => {
    let textToArr = document.forms.matukText.text.value
        .replace(/\W+/gi, ' ')
        .split(' ');

    for (const word of textToArr) {
        if (matukiArr.includes(word)) {
            alert('Ану без матюків тут мені!!!');
            return;
        }
    }
});

// ////=========================== 12 ======================================================================================
// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление
// по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

window.open('rules.html', '_blank');      //!!!РАЗРЕШИТЬ ВСПЛЫВАЮЩИЕ ОКНА!!!!

setTimeout(() => {
    let rulesArr = JSON.parse(localStorage.getItem('ruleArr'));
    const listRules = document.getElementById('rules-menu-list');

    for (const rule of rulesArr) {
        const {title, classId} = rule;
        const li = document.createElement('li');
        li.style.marginBottom = '10px';
        const a = document.createElement('a');

        a.href = 'rules.html'
        a.innerText = title;
        a.classList.add(classId);

        a.onclick = () => {
            localStorage.setItem('class', a.classList[0]);
        };

        li.appendChild(a);
        listRules.appendChild(li);
    }
}, 500);


// ////=========================== 13 ======================================================================================
// -- взять массив пользователей

let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];

// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать
// как вместе так и по отдельности.

let statusCheck = document.forms.users.status;
let ageOld29 = document.forms.users.age29;
let kyivCity = document.forms.users.kyiv;

let filterBTN = document.querySelector('.users-address-btn');

let userDiv = document.createElement('div');

document.querySelector('.user-address-area').appendChild(userDiv);

// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

filterBTN.addEventListener('click', () => {
    let usersMap = usersWithAddress.map(user => user);

    if(statusCheck.checked){
        usersMap = usersMap.filter(({status}) => !status);
    }

    if(ageOld29.checked){
        usersMap = usersMap.filter(({age}) => age >= 29);
    }

    if(kyivCity.checked){
        usersMap = usersMap.filter(({address:{city}}) => city === 'Kyiv');
    }

    // for (const user of usersMap) {
    //     console.log(JSON.stringify(user));
    // }

    userDiv.innerText = JSON.stringify(usersMap);
});

// ////=========================== 14 ======================================================================================
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
//

// ////=========================== 15 ======================================================================================
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

addEventListener('click', ev => {
    console.log(document.getSelection().getRangeAt(0).toString());
});


