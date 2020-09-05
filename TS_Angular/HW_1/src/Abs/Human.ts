export abstract class Human {
    protected name: string;
    protected surname: string;
    protected age: number;
    protected isSvolota: boolean;
    protected haveSovist: boolean = true;

    protected constructor(name:string, surname:string, age:number, isSvolota:boolean) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.isSvolota = isSvolota;
    }
}