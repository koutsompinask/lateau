import { Component } from '@angular/core';

@Component({
  selector: 'app-sweets',
  templateUrl: './sweets.component.html',
  styleUrls: ['./sweets.component.css']
})
export class SweetsComponent {
  isClicked : boolean = false;

  toggle(){
    this.isClicked = !this.isClicked;
  }

  
}
