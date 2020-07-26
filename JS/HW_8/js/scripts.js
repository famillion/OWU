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

    console.log(form['check'].checked);
    console.log(obj['check']);


    for (let i = 0; i < form.length; i++) {
        const {name} = form[i];
        console.log(name);
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
