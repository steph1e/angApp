import { MemberManagementService } from '../member-management.service';
import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OnChanges} from '@angular/core'
@Component({
  selector: 'app-delete-member',
  templateUrl: './delete-member.component.html',
  styleUrls: ['./delete-member.component.css']
})
export class DeleteMemberComponent implements OnChanges {
@Input() memberId: number;
@Output() onClosed = new EventEmitter();
memberName: string;

  constructor(private memberService: MemberManagementService) { }

ngOnChanges() {
  this.memberName = this.memberService.getMemberById(this.memberId).name;
}
delete() {
  this.memberService.deleteMember(this.memberId);
  this.onClosed.emit(null);
}
cancel(){
  this.onClosed.emit(null);
}
  ngOnInit() {
  }

}
