import {IFractions} from "./IFractions";
import {Fractions} from "../Fraction/Fractions";
import {Deputat} from "../Deputat/Deputat";

export interface IRada extends IFractions{
    addFraction(Fractions): void;

    removeFraction(fraction: Fractions): void;

    removeAllFractions(): void;

    showAllFractions(): Fractions[];

    showFraction(fraction: string): Fractions;

    showRadaBigestHabarnik(): Deputat;
}