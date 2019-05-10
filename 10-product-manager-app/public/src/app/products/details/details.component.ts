import { Component, OnInit, Input} from '@angular/core';
import { Product } from 'src/app/models';
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router'
import { ProductService } from '../../services'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input()
  product: Product;

  constructor(
    private readonly productService: ProductService, 
    private readonly route: ActivatedRoute
    ) { }

  ngOnInit() {

    this.route.paramMap.pipe(
      map(params => params.get('product_id')),
      switchMap(id => this.productService.getProduct(id))
      )
      .subscribe(product => (this.product = product));

  }

}
