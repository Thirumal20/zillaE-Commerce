import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
// import { HttpClient } from '@angular/common/http/';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id: any;
  idDetailsObj: any;
  constructor(private ActRoute: ActivatedRoute, private http: HttpClient) {
    ActRoute.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
    ////////////
    if (this.id) {
      this.http.get(`https://fakestoreapi.com/products/${this.id}`).subscribe((res: any) => {

        this.idDetailsObj = res;
      }, (err: any) => {
      })
    }

  }



  ngOnInit(): void {
  }
  n: number = 0;
  addTocart() {
    this.n++;
  }

}
