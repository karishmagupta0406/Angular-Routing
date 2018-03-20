import { Injectable } from '@angular/core'
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router'

import { Observable} from 'rxjs/observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { ProductService } from './product.service';
import { IProduct } from './product'

@Injectable()


export class ProductResolver implements Resolve<IProduct>{

    constructor(private productservice: ProductService, private router: Router){ }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct>{

        let id = route.params['id'];
        if(isNaN(id)){
            console.log(`product id is not a number:  ${id}`);
            this.router.navigate(['/products']);
            return Observable.of(null);
        }
        return this.productservice.getProduct(+id)
        .map(product =>{
            if(product){
                return product;
            }
            console.log(`product not found : ${id}`);
            this.router.navigate(['/products']);
            return null;

        })
        .catch(error => {
            console.log(`retrieval erroe: `);
            this.router.navigate(['/products']);
            return Observable.of(null);
        });
 
    }
}