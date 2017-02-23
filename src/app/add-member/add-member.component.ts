import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {
@Input() memberId: number;
@Output() onAdded = new EventEmitter<string>();
@Output() onCancel = new EventEmitter();
memberName: string;

added(){
  this.onAdded.emit(this.memberName)
}
cancel(){
  this.onCancel.emit(null);
}
  constructor() { }

  ngOnInit() {
  }

}
