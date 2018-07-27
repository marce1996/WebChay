///<reference path="../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
import {Directive, OnInit, ElementRef, Renderer2, Input} from '@angular/core';

@Directive({
  selector: '[resaltar]'
})
export class ResaltarDirective implements  OnInit{
  constructor(private elRef: ElementRef, private renderer: Renderer2){}
  @Input('resaltar') plan : string = '';
  ngOnInit(){
    if(this.plan === 'pagado'){
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yelow');
      this.renderer.setStyle(this.elRef.nativeElement, 'font-wight', 'bold');
    }
  }


}
