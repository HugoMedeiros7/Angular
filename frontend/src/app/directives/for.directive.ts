import { Directive, OnInit, Input, ViewContainerRef } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit{



  constructor(private container: ViewContainerRef, ) {
    
   }
  
   ngOnInit(): void{
    
   }
}
