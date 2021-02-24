import { Component } from "@angular/core";

import { products } from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent {
  products = products;

  share() {
    //window.alert("The product has been shared!");
    location.href = "https://web.whatsapp.com/?text=" + "product.link";
  }
  onNotify() {
    window.alert("You will be notified when the product goes on sale");
  }
  isRated = false;
  isRated1 = false;
  isRated2 = false;
  isRated3 = false;
  isRated4 = false;
  changeRating() {
    this.isRated = !this.isRated;
  }
  changeRating1() {
    this.isRated1 = !this.isRated1;
  }
  changeRating2() {
    this.isRated2 = !this.isRated2;
  }
  changeRating3() {
    this.isRated3 = !this.isRated3;
  }
  changeRating4() {
    this.isRated4 = !this.isRated4;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
