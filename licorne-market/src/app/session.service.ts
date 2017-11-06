import { Injectable } from '@angular/core';


export class Item {

  price: number;
  name: string;
  img: string;
  quantite?: number;
}

@Injectable()
export class SessionService {
  carts = [];


  constructor() { }

    addToCart(item: Item) {
        console.log("hello");


        let canAdd = true;

        this.carts.forEach((cart) => {
          if (item == cart) {
            cart.quantite = cart.quantite +1;
            canAdd = false;
            console.log("c'est false");
          }
        });

        if(canAdd == true) {
          item.quantite = 1;
         console.log("c'est true");
         this.carts.push(item);
       }

      // for (let i = 0; i < this.carts.length; i++) {
      //   console.log("on est dans le for");
      //     if (item === this.carts[i]) {
      //         // this.carts[i].quantite = this.carts[i].quantite + 1;
      //         // foundInArray = true;
      //         console.log("c'est true");
      //       } else {
      //         // foundInArray = false;
      //         console.log("c'est false");
      //       }
      // }

    //     if(foundInArray = false) {
    //   this.carts.push(item);
    //   console.log("foreach good");
    // }

    }

    getCart () :Item[] {
      return this.carts;
    }

}
