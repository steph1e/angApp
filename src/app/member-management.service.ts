import { Injectable } from '@angular/core';
import { MemberData } from './member-data';

@Injectable()
export class MemberManagementService {
    private _members = MemberData.BafMembers.slice(0);

    getAllMembers():MemberData[]{
        return this._members.slice(0);
    }

    getMemberById(id: number):MemberData{
        let member = this._members.filter(s=> s.id == id)[0];
        return member 
        ? {id: member.id, name: member.name}
        :null;
    }
    addMember(newMember: MemberData) {
        newMember.id = this._members.map(s => s.id).reduce((p, c) => p < c ? c : p) + 1;
        this._members.push(newMember);
    }

    saveMember(site: MemberData){
        let oldMember = this._members.filter(s => s.id == member.id)[0];
        if (oldMember) {
            oldMember.name = member.name;
        }
    }
    deleteMember(id:number) {
        let oldMember = this._members.filter(s => s.id == id)[0];
        if(oldMember){
            let memberIndex = this._members.indexOf(oldMember);
            if(memberIndex >= 0){
                this._members.splice(memberIndex, 1);
            }
        }
    }
}