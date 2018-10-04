import {Injectable} from '@angular/core';

@Injectable()
export class CommonUtils {

    isNullOrUndefined(varObj) {
        if (typeof varObj === 'undefined' || varObj === null || varObj === '') {
            return true;
        } else {
            return false;
        }
    }

}
