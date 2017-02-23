import { Component } from '@angular/core';
import { MemberData } from './member-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 members = MemberData.BafMembers.slice(0);
 currentView = 'list';

 navigateTo(view: string) {
   this.currentView = view;
 }
}
