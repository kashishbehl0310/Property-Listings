export class Listings {
    public $key: String;
    public title: String;
    public city: String;
    public type: String;
    public price: String;
    public owner: String;
    public bedrooms: String;
    public path: any;

    constructor(key: String, title: String, city: String, type: String, price: String, owner: String, bedrooms: String, path: any){
        this.$key = key;
        this.title = title;
        this.city = city;
        this.type = type;
        this.price = price;
        this.path = path;
        this.owner = owner;
        this.bedrooms = bedrooms;
    }
}
