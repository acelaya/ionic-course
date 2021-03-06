import { Injectable } from "@angular/core";
import { Product } from "../product";
import { Observable } from "rxjs/Observable";
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface ProductServiceInterface {
    getProducts(): Product[];
    getProductsAsync(): Observable<Product[]>;
}

@Injectable()
export class ProductService implements ProductServiceInterface {
    private productsUrl: string = '/api/products/products.json';

    constructor(
        private http: Http
    ) {}

    getProductsAsync(): Observable<Product[]> {
        return this.http.get(this.productsUrl).map((resp: Response) => {
            return <Product[]> resp.json();
        }).catch((error: Response) => {
            return Observable.throw(error.json().error || 'Server error');
        });
    }

    getProducts(): Product[] {
        return [
            {
                imageUrl: 'https://cdn4.iconfinder.com/data/icons/fineline-fill-gardening/128/garden_gardening_equipment_tool-19-256.png',
                name: 'Leaf Rake',
                code: '001',
                availableDate: '2016-01-01',
                price: 19.95,
                rating: 3,
            },
            {
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51-QGor8qKL._SL256_.jpg',
                name: 'Garden Cart',
                code: '002',
                availableDate: '2016-01-02',
                price: 32.99,
                rating: 4,
            },
            {
                imageUrl: 'http://www.pngall.com/wp-content/uploads/2016/04/Hammer-Download-PNG.png',
                name: 'Hammer',
                code: '003',
                availableDate: '2016-01-03',
                price: 8.99,
                rating: 5,
            },
            {
                imageUrl: 'https://www.wpclipart.com/tools/saws/saw_2/saw.png',
                name: 'Saw',
                code: '004',
                availableDate: '2016-01-04',
                price: 11.55,
                rating: 4,
            },
            {
                imageUrl: 'https://cdn1.iconfinder.com/data/icons/devices-7/128/devices-19-256.png',
                name: 'Video game controller',
                code: '005',
                availableDate: '2016-01-05',
                price: 35.95,
                rating: 5,
            },
        ]
    }
}
