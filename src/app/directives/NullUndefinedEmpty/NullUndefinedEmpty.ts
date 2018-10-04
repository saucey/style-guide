import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector:'[null-undefined-empty]'
})

export class NullUndefinedEmpty{
    constructor(elr:ElementRef){
        elr.nativeElement.style.background='red';
    }
}