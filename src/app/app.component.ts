import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { article } from './article/article.model';

@Component({
  selector: 'app-root',
  imports: [ArticleComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  articles:article[];
  constructor(){
    this.articles = [
       new article('Angular 2', 'http://angular.io', 3),
       new article('Fullstack', 'http://fullstack.io', 2),
       new article('Angular Homepage', 'http://angular.io', 1),
       ];
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
    }
    sortedArticles(): article[] {
       return this.articles.sort((a: article, b: article) => b.votes - a.votes);
   }
}
