import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent {

  product: Product = {
    name: '',
    price: 0
  }

  constructor(private ProductService: ProductService,
    private router: Router) {}

  createProduct(): void{
    this.ProductService.create(this.product).subscribe(() => {
      this.ProductService.showMessage('Produto criado!')
      this.router.navigate(['/products'])
    })
  }


  cancel(): void{
    this.ProductService.showMessage('Operação cancelada!')
    this.router.navigate(['/products'])
  }  


}
