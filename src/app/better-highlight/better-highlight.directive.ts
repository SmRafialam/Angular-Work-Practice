import { style } from '@angular/animations';
import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor:string = 'transparent'
  @Input() highlightColor:string = 'yellow'

  @HostBinding('style.backgroundColor') background: string = this.defaultColor;
  constructor(private elRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','yellow');
  }

  @HostListener('mouseenter') mouseover(eventData:Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','yellow')
    this.background = this.highlightColor;
  } 
  @HostListener('mouseleave') mouseleave(eventData:Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','transparent')
    this.background = this.defaultColor; 
  } 
}
