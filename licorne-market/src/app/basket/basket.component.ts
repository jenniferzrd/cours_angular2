import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {
carts = [];

constructor(private sessionService : SessionService) {}

ngOnInit (): void {
  this.getCart();
}

getCart (): void {
  this.carts = this.sessionService.getCart();
}

}
