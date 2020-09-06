import {IRada} from "../Abs/IRada";
import {Fractions} from "../Fraction/Fractions";
import {Deputat} from "../Deputat/Deputat";

export class VerhovnaRada implements IRada{

    private fractions: Fractions[];

    addDeputat(dep: Deputat, frInd:number): void {
        this.fractions[frInd].addDeputat(dep);
    }

    addFraction(Fractions): void {
        this.fractions.push(Fractions);
    }

    removeAllDeputates(): void {
        for (const fraction of this.fractions) {
            fraction.removeAllDeputates();
        }
    }

    removeAllFractions(): void {
        this.fractions.length = 0;
    }

    removeAllHabarniks(): void {
        for (const fraction of this.fractions) {
            fraction.removeAllHabarniks();
        }
    }

    removeDeputat(dep: Deputat, frInd:number): void {
        this.fractions[frInd].removeDeputat(dep);
    }

    removeFraction(fraction: Fractions): void {
        this.fractions = this.fractions.filter(value => value.getFractionName() !== fraction.getFractionName());
    }

    showAllDeputates(): Deputat[] {
        const arr = []
        for (const fraction of this.fractions) {
            arr.push(...fraction.showAllDeputates());
        }
        return arr;
    }

    showAllFractions(): Fractions[] {
        return this.fractions;
    }

    showAllSumBlackCapital(): number {
        let sum = 0;
        for (const fraction of this.fractions) {
            sum += fraction.showAllSumBlackCapital();
        }
        return sum;
    }

    showBigestHabarnik(indexFr:number): Deputat {
        return this.fractions[indexFr].showBigestHabarnik();
    }

    showDeputat(indexDep: number, indexFr:number): Deputat {
        return this.fractions[indexFr].showDeputat(indexDep);
    }

    showFraction(fraction: string): Fractions {
        return this.fractions.filter(fr=>fr.getFractionName()===fraction)[0];
    }

    showRadaBigestHabarnik(): Deputat {
        const arr: Deputat[] = [];
        for (const fraction of this.fractions) {
            arr.push(fraction.showBigestHabarnik());
        }
        arr.sort((a, b) => b.getBlackCapital() - a.getBlackCapital());
        return arr[0];
    }

}