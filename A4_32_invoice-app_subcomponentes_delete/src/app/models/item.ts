export class Item {
    id! : number;
    product! : string;
    price! : number;
    quantity! : number;

    
    public total() : number {
        return(this.price * this.quantity);
    }
    
}