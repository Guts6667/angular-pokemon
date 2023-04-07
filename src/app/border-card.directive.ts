import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pokemonBorderCard]',
})
export class BorderCardDirective {
  constructor(private el: ElementRef) {
    // this.setHeight(180);
    this.setBorder('#f5f5f5');
  }
  @Input('pokemonBorderCard') borderColor: string;
  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || '#009688');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#f5f5f5');
  }
  // setHeight(height: Number) {
  //   this.el.nativeElement.style.height = `${height}px`;
  // }
  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 1.5px ${color}`;
  }
}
