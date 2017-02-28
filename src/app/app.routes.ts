import { DeleteMemberComponent } from './delete-member/delete-member.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { MemberListComponent } from './member-list/member-list.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes =[
    {
        path:'list', component:MemberListComponent
    },
    {
        path:'add', component: AddMemberComponent
    },
    {
        path:'edit/:id', component: EditMemberComponent
    },
    {
        path:'delete/:id', component: DeleteMemberComponent
    },
    {
        path:'', redirectTo:'list', pathMatch: 'full'
    }
];

export const routingModule = RouterModule.forRoot(routes);