import { Component, OnInit, Input } from '@angular/core';

export class Item {
  name: string;
  img: string;
}


@Component({
  moduleId: module.id,
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() public header: string = 'this is header';

constructor() { }

  ngOnInit() {
  
  }

}
