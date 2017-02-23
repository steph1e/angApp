import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<div class="container-fluid"> <h1>Members</h1> <app-member-list></app-member-list> </div>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
