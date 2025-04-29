import { Component, HostBinding, OnInit, Input } from '@angular/core';
import { article } from './article.model';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() Article:article;
constructor() {
  this.Article = new article(
     'Angular 2',
     'http://angular.io',
     10);
   }
   voteUp(): boolean {

   this.Article.voteUp();

   return false;

   }
   voteDown(): boolean {

   this.Article.voteDown();

   return false;

   }


   ngOnInit() {

   }
}