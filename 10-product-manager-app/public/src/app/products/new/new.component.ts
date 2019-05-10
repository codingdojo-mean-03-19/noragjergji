import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router'
import { Product } from '../../models';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../services';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  product = new Product();
  @Output()
  createProduct =new EventEmitter<Product>();

  constructor(private readonly productService: ProductService, private readonly router: Router) { }

  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm){
    event.preventDefault();
    this.productService.createProduct(this.product)
      .subscribe(product => {
        console.log('new product', product);
        this.router.navigateByUrl('/');
      })
    // this.createProduct.emit(this.product);
    // // this.products.push(this.product);
    // this.product = new Product();
    // form.reset();
  }

}
