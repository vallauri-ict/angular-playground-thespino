import { Directive, Input, HostListener, ElementRef, Renderer2, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input() defaultColor: string = 'LightCyan';
  @Input('appHighlight') highlightColor: string = 'Cyan';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    // this.elRef.nativeElement.style.backgroundColor = this.highlightColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', this.highlightColor);
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.elRef.nativeElement.style.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', this.defaultColor);
    this.backgroundColor = this.defaultColor;
  }

}
