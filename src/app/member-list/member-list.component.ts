
import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MemberData} from '../member-data';
import { MemberManagementService } from '../member-management.service'


@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  
members: MemberData[];



 @Output () onAdd = new EventEmitter();
 @Output () onEdit = new EventEmitter<number>();
 @Output () onDelete = new EventEmitter<number>();

 constructor(private memberService: MemberManagementService, private router: Router,  ){
   this.members = memberService.getAllMembers();
 }

add() {
  this.onAdd.emit(null);
}
edit(memberId: number){
  this.router.navigate(['/edit', memberId]);
  //this.onEdit.emit(memberId);
}

delete(memberId: number){
  this.onDelete.emit(memberId);
}
 ngOnInit() {
}


}

 


