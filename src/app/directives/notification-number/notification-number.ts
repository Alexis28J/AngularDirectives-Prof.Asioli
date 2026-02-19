import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appNotificationNumber]',
})
export class NotificationNumber {

  el = inject(ElementRef);
  appNotificationNumber = input('pippo');

  constructor() {
    effect(() => {
      this.el.nativeElement.style.position = 'relative';
      const notification = document.createElement('div');
      notification.style.width = '20px';
      notification.style.height = '20px';
      notification.style.borderRadius = '50%';
      notification.style.backgroundColor = 'red';
      notification.style.color = 'white';
      notification.style.top = '-15px';
      notification.style.right = '-15px';
      notification.style.position = 'absolute';
      notification.innerHTML = this.appNotificationNumber() !== '' ? this.appNotificationNumber() : '0';
      this.el.nativeElement.appendChild(notification);
    });

  }

}
