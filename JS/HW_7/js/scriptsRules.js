

let rulesAll = document.querySelectorAll('.rules');

let {baseURI: linkToRules} = rulesAll[0];

let ruleArr = [];



localStorage.setItem('linkRules', linkToRules);


for (let i = 0; i < rulesAll.length; i++) {
    const {firstElementChild: {innerText: title}, classList: {[1]: classId}} = rulesAll[i];
    ruleArr.push({title, classId});
}
localStorage.setItem('ruleArr', JSON.stringify(ruleArr));

window.close();
