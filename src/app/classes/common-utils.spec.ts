import { TestBed, async } from '@angular/core/testing';
import { CommonUtils } from './common-utils';

describe('Common Utils', () => {
    
    const service: CommonUtils;

    const nullValue: null = null;
    const undefinedValue: any = undefined;
    const emptyStringValue: string = '';
    
    beforeEach(() => {
        service = new CommonUtils();
    });

    it('should return true from isNullOrUndefined() when empty string is passed', () => { 
        expect(service.isNullOrUndefined(emptyStringValue)).toBeTruthy(); 
    });

    it('should return true from isNullOrUndefined() when null value is passed', () => { 
        expect(service.isNullOrUndefined(nullValue)).toBeTruthy(); 
    });

    it('should return true from isNullOrUndefined() when undefined value is passed', () => { 
        expect(service.isNullOrUndefined(undefinedValue)).toBeTruthy(); 
    });
    
});
