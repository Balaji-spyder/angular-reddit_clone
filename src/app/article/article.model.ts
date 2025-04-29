
import { Inject } from '@angular/core';

export class article{

  title: string;

   link: string;

   votes: number;


   constructor(@Inject(String) title: string, @Inject(String) link: string, @Inject(Number) votes?: number) {

   this.title = title;

   this.link = link;

   this.votes = votes || 0;

   }


   voteUp(): void {

   this.votes += 1;

   }


   voteDown(): void {

   this.votes -= 1;

   }
   domain(): string {
    try {
    const domainAndPath: string = this.link.split('//')[1];
    return domainAndPath.split('/')[0];
        }
   catch (err) {
    return '';
   }
   }
}
