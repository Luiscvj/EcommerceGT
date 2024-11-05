import { Rating } from "../Rating/rating";

export class Product {

     id: number;
     title: string;
     price: number ;
     description: string ;
     category: string ;
     image: string;
     rating:  Rating;

     constructor(_id?:number, _title?:string,_price?: number,_description?: string,_category?: string, _image?: string,_rating?:  Rating){
        this.id = _id ?? 0;
        this.title = _title ?? ""; 
        this.price = _price ??  0;
        this.description = _description ??   "";
        this.category = _category ??   "";
        this.image = _image ??  "";
        this.rating = _rating ?? new Rating(); 
     }

    



}
