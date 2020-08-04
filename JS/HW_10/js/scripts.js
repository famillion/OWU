////========================================== HOME WORK 10 ============================================================

////===================================== 1 ============================================================================

// function userCard(number) {
//     let balance = 100;
//     let transactionLimit = 100;
//     let historyLogs = [];
//     const key = number;
//
//     let options = {
//         year: '2-digit',
//         month: '2-digit',
//         day: '2-digit',
//         hour: '2-digit',
//         minute: '2-digit',
//         second: '2-digit',
//         hour12: false
//     };
//
//     function getCardOptions() {
//         return {balance, transactionLimit, historyLogs, key};
//     }
//
//     function putCredits(sum) {
//         balance += sum;
//
//         historyLogs.push({
//             operationType: 'Карту поповнено',
//             credits: sum,
//             operationTime: new Intl.DateTimeFormat('en-GB', options).format(new Date())
//         });
//     }
//
//     function takeCredits(sum) {
//         if (transactionLimit >= sum && balance >= sum) {
//             balance -= sum;
//
//             historyLogs.push({
//                 operationType: 'Зняття коштів!',
//                 credits: sum,
//                 operationTime: new Intl.DateTimeFormat('en-GB', options).format(new Date())
//             });
//         } else {
//             (transactionLimit >= sum)
//                 ? console.error('Перевищено ліміт зняття!!!')
//                 : console.error('Недостатньо коштів на рахунку!!!');
//
//             historyLogs.push({
//                 operationType: 'Увага! Невдала спроба зняття коштів!',
//                 credits: sum,
//                 operationTime: new Intl.DateTimeFormat('en-GB', options).format(new Date())
//             });
//         }
//     }
//
//     function setTransactionLimit(limit) {
//         transactionLimit = limit;
//     }
//
//     function transferCredits(credits, toCard) {
//         takeCredits(credits);
//         toCard.putCredits(+(credits * 0.005).toFixed(2));
//     }
//
//     function allFunc() {
//         return {getCardOptions, putCredits, takeCredits, setTransactionLimit, transferCredits};
//     }
//
//     return allFunc();
// }

////===================================== 2 ============================================================================

class UserAccount {
    #name;
    #cards = [];
    #count = 0;

    constructor(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }

    addCard() {
        if (this.#cards.length < 3) {
            this.#cards.push(this.#userCard(this.#count + 1));
            this.#count++;
        } else {
            console.error('Досягнено ліміт карток');
        }
    }

    getCardByKey(keyCard) {
        switch (keyCard) {
            case 1:
            case 2:
            case 3:
                if (this.#cards[keyCard - 1]) {
                    return this.#cards[keyCard - 1]
                } else {
                    return 'Карта ще не створена! Бажаєте відкрити рахунок?';
                }
            default:
                console.error('Такої карти нема! Введіть 1, 2 або 3!');
        }
    }

    #userCard(number) {
        let balance = 100;
        let transactionLimit = 100;
        let historyLogs = [];
        const key = number;

        let options = {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        };

        function getCardOptions() {
            return {balance, transactionLimit, historyLogs, key};
        }

        function putCredits(sum) {
            balance += sum;

            historyLogs.push({
                operationType: 'Карту поповнено',
                credits: sum,
                operationTime: new Intl.DateTimeFormat('en-GB', options).format(new Date())
            });
        }

        function takeCredits(sum) {
            if (transactionLimit >= sum && balance >= sum) {
                balance -= sum;

                historyLogs.push({
                    operationType: 'Зняття коштів!',
                    credits: sum,
                    operationTime: new Intl.DateTimeFormat('en-GB', options).format(new Date())
                });
            } else {
                (transactionLimit >= sum)
                    ? console.error('Перевищено ліміт зняття!!!')
                    : console.error('Недостатньо коштів на рахунку!!!');

                historyLogs.push({
                    operationType: 'Увага! Невдала спроба зняття коштів!',
                    credits: sum,
                    operationTime: new Intl.DateTimeFormat('en-GB', options).format(new Date())
                });

                throw new Error('OOPS!!!');
            }
        }

        function setTransactionLimit(limit) {
            transactionLimit = limit;
        }

        function transferCredits(credits, toCard) {
            try {
                takeCredits(credits);
                toCard.putCredits(+(credits - (credits * 0.005)).toFixed(2));
            } catch (e) {
                console.error(e);
            }
        }

        function allFunc() {
            return {getCardOptions, putCredits, takeCredits, setTransactionLimit, transferCredits};
        }

        return allFunc();
    }
}

//******** TEST *************

let user = new UserAccount('Bob');
user.addCard()
user.addCard()
let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);

card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(1000, card2);
card2.takeCredits(50);

console.log(card1.getCardOptions());
console.log(card2.getCardOptions());





