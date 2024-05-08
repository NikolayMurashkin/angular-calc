import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[myChangeColor]',
  standalone: true,
})
export class MyChangeColorDirective implements AfterViewInit {
  @Input('myChangeColor') colors?: string[];
  private _el: ElementRef;

  constructor(el: ElementRef) {
    this._el = el;
  }

  ngAfterViewInit(): void {
    this.onChangeColor(this._el);
  }

  private onChangeColor(el: ElementRef) {
    if (this.colors && this.colors.length !== 0) {
      setInterval(() => {
        el.nativeElement.style.color =
          this.colors![Math.floor(Math.random() * this.colors!.length)];
      }, 1000);
    }
  }
}
