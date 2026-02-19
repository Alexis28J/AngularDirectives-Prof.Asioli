import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appSuperButton]',
})
export class SuperButton {

  colors = ['crimson', 'lime', 'slateblue'];
  colorIndex = 0;

  el = inject(ElementRef);

  constructor() {

    setInterval(() => {
      this.colorIndex++;
      if(this.colorIndex > 2){
        this.colorIndex = 0
      }
      this.el.nativeElement.style.backgroundColor = this.colors[this.colorIndex];
    }, 100);
 
  }

}
