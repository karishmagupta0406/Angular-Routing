import { Injectable } from '@angular/core'
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router'

import { Observable} from 'rxjs/observable'
import { ProductService } from './product.service';
import { IProduct } from './product'

@Injectable()


export class ProductResolver implements Resolve<IProduct>{

    constructor(private productservice: ProductService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct>{
        let id = +route.params['id'];

        return this.productservice.getProduct(id); 

    }
}