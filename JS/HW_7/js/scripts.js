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
    let name = document.forms.form1.name.value;
    let surname = document.forms.form1.surname.value;
    let email = document.forms.form2.email.value;
    let pass = document.forms.form2.pass.value;

    console.log(new Users(name,surname,email,pass));
});

////=========================== 7 ======================================================================================
// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.

function createTable(rows,columns,tag) {

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

document.body.appendChild(createTable(5, 5, 'div'));

////=========================== 8 ======================================================================================
