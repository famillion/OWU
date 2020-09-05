import {Deputat} from "../Deputat/Deputat";

export interface IFractions {
    addDeputat(dep: Deputat, frInd?:number): void;

    removeDeputat(dep: Deputat, frInd?:number): void;

    removeAllHabarniks(): void;

    showBigestHabarnik(indexFr?:number): Deputat;

    showAllDeputates(): Deputat[];

    removeAllDeputates(): void;

    showAllSumBlackCapital(): number;

    showDeputat(index: number,indexFr?:number): Deputat;
}