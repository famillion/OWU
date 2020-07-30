////=============================== HOME WORK 8 ========================================================================

////============================== 1 ===================================================================================
// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

let textArea = document.querySelector('.text-area textarea');
textArea.value = localStorage.getItem('textArea') || '';

textArea.addEventListener('input', () => {
    let str = textArea.value;
    localStorage.setItem('textArea', str);
})

////============================== 2 ===================================================================================
// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.

class UserForm {
    constructor(login, email, pass, date,
                volume, ratio, check, color, tel, message) {
        this.login = login;
        this.email = email;
        this.pass = pass;
        this.date = date;
        this.volume = volume;
        this.ratio = ratio;
        this.check = check;
        this.color = color;
        this.tel = tel;
        this.message = message;
    }
}

localStorage.getItem('userForm1')
    ? form1Set(document.form1, JSON.parse(localStorage.getItem('userForm1')))
    : showAlert();

let userFormBtm = document.querySelector('.form-with-inputs-btn');

userFormBtm.addEventListener('click', () => {
    let {
        login: {value: login}, email: {value: email}, pass: {value: pass}, date: {value: date},
        volume: {value: volume}, ratio: {value: ratio}, check: {checked: check}, color: {value: color},
        tel: {value: tel}, message: {value: message}
    } = document.form1;

    console.log(ratio);
    let user = new UserForm(login, email, pass, date, volume, ratio, check, color, tel, message);

    localStorage.setItem('userForm1', JSON.stringify(user));
});

function form1Set(form, obj) {

    for (let i = 0; i < form.length; i++) {
        const {name} = form[i];
        (name === 'check' && obj[name]) ? form[name].checked = true : form[name].checked = false;
        if (name === 'ratio' && obj[name] === form[name].value) {
            form[name].checked = true;
        } else if (name === 'ratio' && obj[name] === form[name].value) {
            form[name].checked = true;
        } else {
            form[name].value = obj[name];
        }
    }
}

function showAlert() {
    let div = document.createElement('div');
    div.classList.add('alert');
    div.style.color = 'red';
    div.innerHTML = 'Заповніть форму';
    document.form1.appendChild(div);
}

////============================== 3 ===================================================================================
// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище),
// затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории
// (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

let arrowsDiv = document.querySelector('.text-step-arrows');

let textStepsArea = document.querySelector('#text-step-area');

let textStepsAreaBTN = document.querySelector('.save-text-step-area');

let count = 0;

let textArr = [];

localStorage.getItem('areaObj')
    ? {count, textArr} = JSON.parse(localStorage.getItem('areaObj'))
    : localStorage.setItem('areaObj', JSON.stringify({count, textArr}));

textStepsArea.value = textArr[count - 1] || '';

setTimeout(() => {
    if (count > 0) {
        leftBTN = document.createElement('button');
        rightBTN = document.createElement('button');

        leftBTN.innerText = '<';
        leftBTN.setAttribute('arrow', 'left');

        rightBTN.innerText = '>';
        rightBTN.setAttribute('arrow', 'right');


        addEventListener('click', ev => {
            if (ev.target.attributes[0].value === 'left') {
                if (count > 1) {
                    count--;
                    textStepsArea.value = textArr[count - 1];
                } else {
                    count = 0;
                }
            }
            if (ev.target.attributes[0].value === 'right') {
                if (count < textArr.length) {
                    count++;
                    textStepsArea.value = textArr[count - 1];

                    console.log(count);
                } else {
                    count = textArr.length;
                }
            }
        });


        arrowsDiv.appendChild(leftBTN);
        arrowsDiv.appendChild(rightBTN);
    }

    textStepsAreaBTN.addEventListener('click', () => {
        if (textStepsArea.value && textStepsArea.value.trim() !== '') {
            if (textArr.length > 10) {
                textArr.shift();
            }
            textArr.push(textStepsArea.value);
            count = textArr.length;
            localStorage.setItem('areaObj', JSON.stringify({count, textArr}));
        }
        location.reload();
    });
}, 0)

////============================== 4 ===================================================================================
// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма,
// в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

function UserBook(lastname, firstname, patronymic, tel, email, firm, department, birthday, id) {
    this.lastname = lastname;
    this.firstname = firstname;
    this.patronymic = patronymic;
    this.tel = tel;
    this.email = email;
    this.firm = firm;
    this.department = department;
    this.birthday = birthday;
    this.id = id;
}

let usrBookForm = document.userBookForm;
let usBkDiv = document.querySelector('.user-book');
let saveInBookBtn = document.querySelector('.user-book-btn');
let userBookList = JSON.parse(localStorage.getItem('userBook'))||[];



if (userBookList && userBookList.length > 0) {
    let divUsers = document.createElement('div');
    for (const user of userBookList) {

        let userParsed = JSON.parse(user);

        let {id, lastname, firstname, patronymic, tel, email, firm, department, birthday} = userParsed;
        id = userBookList.indexOf(user) + 1;
        let usr = document.createElement('div');
        usr.classList.add('user');

        let numDiv = document.createElement('div');
        numDiv.style.textAlign = 'center';
        numDiv.style.fontSize = '2em';
        numDiv.innerText = id;

        usr.appendChild(numDiv);

        let fio = document.createElement('div');
        fio.innerText = `ФИО: ${lastname} ${firstname} ${patronymic}`;
        usr.appendChild(fio);

        let telf = document.createElement('div');
        telf.innerText = `tel: ${tel}`;
        usr.appendChild(telf);

        let ml = document.createElement('div');
        ml.innerText = `почта: ${email}`
        usr.appendChild(ml);

        let firma = document.createElement('div');
        firma.innerText = `фирма: ${firm}`
        usr.appendChild(firma);

        let dep = document.createElement('div');
        dep.innerText = `почта: ${department}`
        usr.appendChild(dep);

        let bir = document.createElement('div');
        bir.innerText = `почта: ${birthday}`
        usr.appendChild(bir);

        let editBlock = document.createElement('div');
        editBlock.classList.add('user-form-block');

        let editBTN = document.createElement('button');
        editBTN.innerText = 'Edit';

        let editFormBlock = document.createElement('div');
        editFormBlock.classList.add('hidden');

        let editForm = usrBookForm.cloneNode(true);

        editForm.lastname.value = lastname;
        editForm.firstname.value = firstname;
        editForm.patronymic.value = patronymic;
        editForm.tel.value = tel;
        editForm.email.value = email;
        editForm.firm.value = firm;
        editForm.department.value = department;
        editForm.birthday.value = birthday;


        editBTN.addEventListener('click', () => {
            editFormBlock.classList.toggle('hidden');
        });

        let innerSaveBTN = saveInBookBtn.cloneNode();
        innerSaveBTN.innerText = 'Save';

        innerSaveBTN.addEventListener('click', () => {
            userParsed.lastname = editForm.lastname.value;
            userParsed.firstname = editForm.firstname.value;
            userParsed.patronymic = editForm.patronymic.value;
            userParsed.tel = editForm.tel.value;
            userParsed.email = editForm.email.value;
            userParsed.firm = editForm.firm.value;
            userParsed.department = editForm.department.value;
            userParsed.birthday = editForm.birthday.value;

            userBookList[id-1] = JSON.stringify(userParsed);

            localStorage.setItem('userBook', JSON.stringify(userBookList));
            setTimeout(() => {
                editFormBlock.classList.toggle('hidden');
                location.reload();
            }, 1000);
        });

        editFormBlock.appendChild(editForm);
        editFormBlock.appendChild(innerSaveBTN);

        editBlock.appendChild(editBTN);
        editBlock.appendChild(editFormBlock);

        let deleteBTN = document.createElement('button');
        deleteBTN.innerText = 'Delete';

        deleteBTN.addEventListener('click', () => {
            userBookList.splice(id - 1, 1);
            localStorage.setItem('userBook', JSON.stringify(userBookList));
            location.reload();
        });



        usr.appendChild(editBlock);

        usr.appendChild(deleteBTN);

        divUsers.appendChild(usr);

        usBkDiv.appendChild(divUsers);
    }
}

saveInBookBtn.addEventListener('click', () => {
    if (usrBookForm.lastname && usrBookForm.firstname && usrBookForm.email) {
        let us = new UserBook(usrBookForm.lastname.value, usrBookForm.firstname.value, usrBookForm.patronymic.value,
            usrBookForm.tel.value, usrBookForm.email.value, usrBookForm.firm.value, usrBookForm.department.value,
            usrBookForm.birthday.value, userBookList?(userBookList.length + 1):1);

        userBookList.push(JSON.stringify(us));

        localStorage.setItem('userBook', JSON.stringify(userBookList));

        location.reload();
    } else {
        alert('Enter Name Surname and email');
    }
});
