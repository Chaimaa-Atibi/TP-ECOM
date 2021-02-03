import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products;

  constructor() { }

  ngOnInit(): void {
    this.products=[
      {id:1, name:"Computer HP 54", price:7890},
      {id:2, name:"Printer LX ER", price:1200},
      {id:3, name:"Smart Phone Samsung  S9", price:12000},
    ]
  }

}
