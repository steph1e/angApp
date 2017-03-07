import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private memberService: MemberManagementService, private route: ActivatedRoute, private router: Router) {
    this.memberName = this.memberService.getMemberById(this.memberId).name;
   this.memberId = this.route.snapshot.params['id'];
   
   }
save(){
  this.memberService.saveMember({id: this.memberId, name: this.memberName});
 // this.onClosed.emit(null);
 this.router.navigate(['/list']);
}

cancel(){
  this.onClosed.emit(null);
}

  ngOnInit() {
  }

}
