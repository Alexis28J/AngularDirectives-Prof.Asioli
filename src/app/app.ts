
import { NgClass, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { SuperButton } from "./directives/super-button/super-button";
import { NotificationNumber } from "./directives/notification-number/notification-number";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, NgClass, NgStyle, SuperButton, NotificationNumber],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  protected readonly title = signal('AngularDirectives');

  firstNumber = 0;
  secondNumber = 0;

  result = 0;
  isResultEven = true;


  fontSize = 16;
  isBold = false;

  pStyle = {
    'font-size': '16px',
    'font-weight': 'normal'
  }

  classes = {
    'btn-color': false,
    'blue-font': false,
    'medium-font': false,
    'large-padding': false
  }



  calculate() {
    this.result = this.firstNumber + this.secondNumber;
    if(this.result % 2 === 0){
      this.isResultEven = true;
    } else {
      this.isResultEven = false;
    }
  }

  look() {
    console.log(this.secondNumber)
  }

  activateColor() {
    this.classes['btn-color'] = !this.classes['btn-color'];
  }

  increaseFont() {
    this.fontSize++;
    this.pStyle['font-size'] = this.fontSize+'px';
  }

  decreaseFont() {
    this.fontSize--;
    this.pStyle['font-size'] = this.fontSize+'px';
  }

  toggleBold() {
    this.isBold = !this.isBold;
    if (this.isBold) {
      this.pStyle['font-weight'] = 'bold';
    } else {
      this.pStyle['font-weight'] = 'normal';
    }
  }
  
}
