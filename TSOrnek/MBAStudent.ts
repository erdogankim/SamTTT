import { Student } from "./drived";

export class MBAStudent extends Student{
    constructor(public name : string,
        public surname : string) {
        super(name,surname);
    }
    
    public myAbsMethod(): Number {
        return 5;
    }
}