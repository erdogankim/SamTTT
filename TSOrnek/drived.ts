import { Person } from ".";

export abstract class Student extends Person{
    constructor(public name : string,
        public surname : string) {
        super(name,surname);
    }

    public studentShowMessage() : void{
        super.showMessage();
    }

    public abstract myAbsMethod() : Number;
}