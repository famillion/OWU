import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyletestDirective {



  constructor(private el: ElementRef) { }

  @HostBinding('style.color') elStyleColor: string;
  @HostBinding('style.fontWeight') elStyleFontWeight: string;
  @HostBinding('style.transition') elTransition: string;

  @HostListener('mouseenter') onEnter(): void{
    this.elStyleColor = '#33335f';
    this.elStyleFontWeight = 'bold';
    this.elTransition = '.3s';
  }

  @HostListener('mouseleave') onLeave(): void{
    this.elStyleColor = null;
    this.elStyleFontWeight = null;
    this.elTransition = '.2s';
  }
}
