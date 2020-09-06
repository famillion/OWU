import {IFractions} from "../Abs/IFractions";
import {Deputat} from "../Deputat/Deputat";


export class Fractions implements IFractions {
    private readonly frName: string;
    private membersList: Deputat[];

    constructor(name) {
        this.frName = name;
    }

    getFractionName(): string {
        return this.frName;
    }

    addDeputat(dep: Deputat): void {
        this.membersList.push(dep);
    }

    removeAllDeputates(): void {
        this.membersList.length = 0;
    }

    removeAllHabarniks(): void {
        this.membersList = this.membersList.filter(member => !member.getBlackCapital())
    }

    removeDeputat(dep: Deputat): void {
        this.membersList = this.membersList.filter(member => member.getID() !== dep.getID());
    }

    showAllDeputates(): Deputat[] {
        return this.membersList;
    }

    showAllSumBlackCapital(): number {
        return this.membersList.reduce((previousValue, currentValue) => {
            return previousValue + currentValue.getBlackCapital();
        }, 0);
    }

    showBigestHabarnik(): Deputat {
        const max: number = this.membersList
            .map(member => member.getBlackCapital())
            .reduce((previousValue, currentValue) => {
                return Math.max(previousValue, currentValue);
            });

        return this.membersList.filter(member => member.getBlackCapital() === max)[0];
    }

    showDeputat(index: number): Deputat{
        return this.membersList[index];
    }

}