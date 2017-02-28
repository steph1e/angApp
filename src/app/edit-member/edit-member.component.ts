import { MemberManagementService } from '../member-management.service';

import { MemberData } from '../member-data';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit {
@Input () memberId: number;
 memberName: string;

 @Output() onClosed = new EventEmitter();

  constructor(private memberService: MemberManagementService) {
    this.memberName = this.memberService.getMemberById(this.memberId).name;
   }
save(){
  this.memberService.saveMember({id: this.memberId, name: this.memberName});
  this.onClosed.emit(null);
}

cancel(){
  this.onClosed.emit(null);
}

  ngOnInit() {
  }

}
