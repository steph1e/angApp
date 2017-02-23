
import { MemberData } from '../member-data';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit {
@Input() member:MemberData;
@Output() onSaved = new EventEmitter<MemberData>();
@Output() onCancel = new EventEmitter();

saved(){
  if (this.member.id){
    this.onSaved.emit(this.member);
  }
}
cancel(){
  this.onCancel.emit(null);
}
  constructor() { }

  ngOnInit() {
  }

}
