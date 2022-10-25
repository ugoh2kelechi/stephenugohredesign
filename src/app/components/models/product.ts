// export class Product {
//     id: number;
//     title: string;
//     price: number;
//     image: [];
//     timestamp: number;
//     postdate: string;

//     constructor(id: number, title: string, price: number, image: [], timestamp: number, postdate: string,) {
//         this.id = id;
//         this.title = title;
//         this.price = price;
//         this.image = image;
//         this.timestamp = timestamp;
//         this.postdate = postdate;
//     }
// }


export class Product {
    id: number;
    title: string;
    shortdesc: string;
    image: string[];
    category: number[];
    stock: boolean;
    rating: number;
    discount: number;
    price: number;
    productinfo: string[];
    htmldesc: string;
    addinfo: {
        attributes: string;
        values: string;
    }[];
    reviews: {
        user: number[];
        rating: number;
        comment: string;
        commentdate: string;
    }[];

    constructor(id: number, title: string, shortdesc: string, image: string[], category: number[], stock: boolean, rating: number, discount: number, price: number, productinfo: string[], htmldesc: string, addinfo: {attributes: string; values: string;}[], reviews: {user: number[]; rating: number; comment: string; commentdate: string;}[]) {
        this.id = id;
        this.title = title;
        this.shortdesc = shortdesc;
        this.image = image;
        this.category = category;
        this.stock = stock;
        this.rating = rating;
        this.discount = discount;
        this.price = price;
        this.productinfo = productinfo;
        this.htmldesc = htmldesc;
        this.addinfo = addinfo;
        this.reviews = reviews;
    }
}
