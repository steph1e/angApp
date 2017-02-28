import { Component } from '@angular/core';
import { MemberData } from './member-data';
import { EditMemberComponent } from './edit-member/edit-member.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 memberId: number;
 currentView = 'list';

 navigateTo(view: string){
   this.currentView = view;
 }
}