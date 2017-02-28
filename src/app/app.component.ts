
import { Component, Output, EventEmitter } from '@angular/core';
import { MemberData } from './member-data';
import { EditMemberComponent } from './edit-member/edit-member.component'
import { MemberManagementService} from './member-management.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MemberManagementService]
})
export class AppComponent {
 memberId: number;
 currentView = 'list';
 
 navigateTo(view: string){
   this.currentView = view;
 }
}