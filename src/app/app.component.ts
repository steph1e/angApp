import { Component } from '@angular/core';
import { MemberData } from './member-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
 members = MemberData.BafMembers.slice(0);
 newMemberId: number;
 currentView = 'list';
 currentMember: MemberData;

 navigateTo(view: string) {
   this.currentView = view;
 }
 startEdit(member:MemberData){
   this.currentMember = {id: member.id, name: member.name };
   this.navigateTo('edit');
 }
 memberSaved(member:MemberData){
   let oldMember = this.members.filter(s => s.id == member.id)[0];
   if (oldMember){
     oldMember.name = member.name;
   }
   this.navigateTo('list');
 }
 startAdd() {
   this.newMemberId = this.members.map(s => s.id).reduce((p, c) => p < c ? c : p) + 1;
   this.navigateTo('add');
 }
 memberAdded(newMemberName: string){
   this.members.push({id: this.newMemberId, name:newMemberName});
   this.navigateTo('list');
 }
}
