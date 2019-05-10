import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../models';
import { ProductService } from '../../services'
import { Subscription } from 'rxjs'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  selectedProduct: Product;
  sub: Subscription;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    console.log(this.productService);
    this.sub = this.productService.getProducts()
      .subscribe(products => {
      this.products = products;
      })
  }

  
  onSelect(product: Product){
    console.log('Selecting product', product);
    this.selectedProduct = this.selectedProduct === product ? null : product;
  }
      onCreate(product: Product){
        console.log('Creating Player', product)
        this.productService.createProduct(product)
          .subscribe(createdProduct => {
            console.log(createdProduct);
    
            this.products.push(createdProduct);
          })
      }
  
  ngOnDestroy(): void {
    this.sub.unsubscribe;    
   }
   

  onDelete(event: Event, product: Product){
    console.log('Deleting Product')
    event.stopPropagation();
    this.productService.removeProduct(product._id)
      .subscribe(removedProduct => {
        console.log('Deleting Product', removedProduct)
        this.products = this.products.filter(product => product._id != removedProduct._id)
      })
  }

}
