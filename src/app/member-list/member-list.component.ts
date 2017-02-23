import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MemberData} from '../member-data';


@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  
@Input() members:MemberData[];
@Output() onAdd = new EventEmitter();

add(){
  this.onAdd.emit(null);
}

  constructor() { }

  ngOnInit() {
  }

}
