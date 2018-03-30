import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ProductEditComponent } from './product-edit.component';

@Injectable()

export class ProductEditGuard implements CanDeactivate<ProductEditComponent>{
     //productEditComponenet is the name of controller which is going to b used by route     
     canDeactivate(component:ProductEditComponent): boolean{
         if(component.isDirty){
             let productname = component.product.productName ||'New Product';
             return confirm(`navigation away and lose all data changes to ${productname}`);
         }
         return true;
     }
}