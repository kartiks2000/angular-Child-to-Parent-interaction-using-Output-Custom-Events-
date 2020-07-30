import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name="";

  named = (event) => {
    // console.log(event);
    this.name = event;
  }
}  
