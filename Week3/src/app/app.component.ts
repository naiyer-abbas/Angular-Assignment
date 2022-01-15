import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  evens: string[] = [];
  odds: string[] = [];

  updateGameState(data){
    console.log(data);
    
    if ( data % 2 === 0) {
      this.evens.push(`even-${data}`);
    } else {
      this.odds.push(`odd-${data}`);
    }
  }
}
