import { Component, OnInit } from '@angular/core';
import {SuppliersService} from '../services/suppliers.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {
  suppliers: any;
  errorMessage: any;

  constructor(private suppliersService:SuppliersService) { }

  ngOnInit(): void {
    this.suppliersService.getSuppliers()
      .subscribe(data=>{
        this.suppliers=data;
        },error => {
        this.errorMessage=error.error.message;
        })
  }

}
