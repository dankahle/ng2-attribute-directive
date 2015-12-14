
import {Directive, ElementRef, Renderer, Input} from 'angular2/angular2';

@Directive({
   selector: '[my-dir]',
   host: {
      '(mouseenter)': 'onMouseEnter()',
      '(mouseleave)': 'onMouseLeave()'
   }

})

export class MyDir {
   private _defaultColor: string;

   @Input() hiColor: string;
   @Input() set defaultColor (color: string) {
      this._defaultColor = color || 'yellow';
   }
   constructor(private el: ElementRef, private renderer: Renderer) {
   }

   onMouseEnter() {
      this.highlight(this.hiColor || this._defaultColor);
   }

   onMouseLeave() {
      this.highlight(null);
   }

   highlight(color) {
      this.renderer.setElementStyle(this.el, 'background-color', color);
   }
}
