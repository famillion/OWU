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

async function printText(text, field) {
    for (const symb of text) {
        await new Promise(resolve => {
            setTimeout(() => {
                resolve(field.innerHTML += symb);
            },(Math.random()*400)+100);
        });
    }
}

printBTN.addEventListener('click', () => {
    printText(inputTextField.value, outputTextField);
});