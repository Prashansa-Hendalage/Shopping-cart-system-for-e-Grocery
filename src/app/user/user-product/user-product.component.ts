import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from '../services/product-details.service';


@Component({
  selector: 'app-user-product',
  templateUrl: './user-product.component.html',
  styleUrls: ['./user-product.component.css']
})
export class UserProductComponent implements OnInit {
  constractor(service:ProductDetailsService) {}
    
  ngOnInit(): void {
      
  }

}
