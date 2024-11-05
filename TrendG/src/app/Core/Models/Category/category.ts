export class Category {
    category_id: number;
    category_name: string;
    category_alias:string
   


    constructor(_category_id?:number ,_category_name?: string, _category_alias?:string ){
        this.category_id = _category_id ?? 0;
        this.category_name = _category_name ?? "";
        this.category_alias = _category_alias ?? "";
  
    }
}
