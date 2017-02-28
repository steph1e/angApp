import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MemberListComponent } from './member-list/member-list.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { DeleteMemberComponent } from './delete-member/delete-member.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberListComponent,
    AddMemberComponent,
    EditMemberComponent,
    DeleteMemberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
