
import { MemberData } from './member-data';
import { Injectable } from '@angular/core';

@Injectable()
export class MemberLogApi {
    static counter = 0;
    getMembers(){
        return new Promise<MemberData[]>((resolve, reject) => {
            MemberLogApi.counter++;
            setTimeout(() => {
                if (MemberLogApi.counter % 3 == 0){
                    reject('Error: call counter is ${MemberLogApi.counter}');
                }else {
                    resolve(MemberLogApi.BafMembers);
                }
            }, 1000);
        })
    }
}