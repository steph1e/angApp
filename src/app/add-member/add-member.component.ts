import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {
@Output() onAdded = new EventEmitter();
@Output() onCancel = new EventEmitter();

added(){
  this.onAdded.emit(null)
}
cancel(){
  this.onCancel.emit(null);
}
  constructor() { }

  ngOnInit() {
  }

}
