import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboardTwo';
  sidebar=true
  isSideBarToggle(){
this.sidebar=!this.sidebar
  }
}
