export class Rating {

    private rate: number ;
    private count: number;

    constructor(_rate?: number, _count?:number){
        this.rate  = _rate ?? 0;
        this.count = _count ?? 0;
    }

    
}
