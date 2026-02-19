
import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {


  protected readonly title = signal('AngularDirectives');

  firstNumber = 0;
  secondNumber = 0;

  result = 0;
  isResultEven = true;

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
  
}
