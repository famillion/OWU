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

textStepsArea.value = textArr[count - 1]||'';

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

                    console.log(count);
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


