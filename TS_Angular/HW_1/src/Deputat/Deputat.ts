import {Human} from '../Abs/Human';

export class Deputat extends Human {
    private blackCapital: number = 0;
    private readonly sumToSovistOn: number;
    private ID: number;

    constructor(name: string, surname: string, age: number, isSvolota: boolean, sumToSovistOn?: number) {
        super(name, surname, age, isSvolota);
        this.sumToSovistOn = sumToSovistOn;
        isSvolota ? this.haveSovist = false : this.haveSovist;

        this.setId();
    }

    private setId():void{
        setTimeout(()=>{
            this.ID = Date.now();
        })
    }

    private tumblerSovist(sum: number): void {
        if (this.sumToSovistOn && (sum > this.sumToSovistOn)) {
            const hesitation = Math.random() * sum;
            console.log('Зачекайте я подумаю...');

            setTimeout(() => {
                if (hesitation > this.sumToSovistOn) {
                    this.haveSovist = true;
                }

                console.log('Все! Я подумав, все обміркував...');
            }, hesitation);
        }
    }

    giveHabar(sum: number): boolean {
        this.tumblerSovist(sum);
        if (!this.isSvolota) {
            console.log(`Ви що! Я, ${this.name} ${this.surname}, порядна людина! Я не беру хабарів!!!`);
            return false;
        }
        if (this.isSvolota && !this.haveSovist) {
            this.blackCapital += sum;
            console.log(`Дякую за вашу допомогу у розмірі ${sum} , я розгляну ваше питання найближчим часом! Я,
              депутат ${this.name} ${this.surname}, завжди до ваших послуг!`);
            return true;
        }

        console.log(`Вибачте! Але ${sum} забагато! Я, ${this.name} ${this.surname}, порядна людина! Мені віра не дозволяє!!!`);
        return false;
    }

    getBlackCapital():number{
        return this.blackCapital;
    }

    getID():number{
        return this.ID;
    }

}