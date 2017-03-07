import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { MemberData } from '../member-data';
import { MemberLogApi } from '../member-log-api.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-log',
  templateUrl: './member-log.component.html',
  styleUrls: ['./member-log.component.css']
})
export class MemberLogComponent implements OnInit {
loading = false;
members: MemberData[];
errorMessage = null;
  constructor(private api: MemberLogApi) { }


refreshMembers() {
  this.loading = true;
  this.members= [];
  this.errorMessage = null;

  this.api.getMembers().then(data => {
    this.members = data;
    this.loading = false;
  })
 .catch( errMsg => {
    this.errorMessage = errMsg;
    this.loading = false
  });
}

  ngOnInit() {
  }

}
