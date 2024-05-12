export class Person{
    
    constructor(public name : string,
                public surname : string
    ) {
        
    }

    public showMessage() : void{
        console.log(this.name);
    }

}