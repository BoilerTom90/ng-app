import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-products',
   templateUrl: './products.component.html',
   styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

   productName = "ice cream";
   products = ['A Book', 'A Tree'];

   constructor() { }

   ngOnInit() {
   }

   addProduct() {
      this.products.push(this.productName);
   }
}
