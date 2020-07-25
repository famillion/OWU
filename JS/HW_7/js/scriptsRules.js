let rulesAll = document.querySelectorAll('.rules');

let ruleArr = [];

for (let i = 0; i < rulesAll.length; i++) {
    const {firstElementChild: {innerText: title}, classList: {[1]: classId}} = rulesAll[i];
    ruleArr.push({title, classId});
}
localStorage.setItem('ruleArr', JSON.stringify(ruleArr));

let className = localStorage.getItem('class');

for (const rule of rulesAll) {
    console.log(className);
    rule.classList.contains(className)
        ? rule.classList.add('selected')
        : rule.classList.remove('selected');
}

window.close();
