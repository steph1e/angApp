import { Router } from '@angular/router';
import { MemberManagementService } from '../member-management.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {
@Output() onClosed = new EventEmitter();
memberName: string;
  constructor(private memberService: MemberManagementService, private router: Router) {

   }
   add(){
     this.memberService.addMember({id: 0, name:this.memberName});
     //this.onClosed.emit(null);
     this.router.navigate(['/list']);
   }
cancel(){
this.onClosed.emit(null);
}
  ngOnInit() {
  }

}
