import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categry: Array<any> = [];
  prodtsAry: Array<any> = [];
  productCtgyName: any;

  constructor(private datSer: DataService, private router: Router) { }

  ngOnInit(): void {
  };
  getCategories() {
    this.datSer.getCategoryService().subscribe((res: any) => {
      this.categry = res;
    }, (error: any) => {
      console.log("error");
    })
  };
  // //////////////////
  getProducts(e: any) {
    this.datSer.getproducts(e).subscribe((res: any) => {
      this.prodtsAry = res;
      this.productCtgyName = res[0].category;
    }, (error: any) => { });
  }
  ////////////////
  getProductDetailsById(e: any) {
    this.router.navigate(['/productDetails', { 'id': e.id }])
  }

}
