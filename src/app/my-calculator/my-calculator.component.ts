import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-calculator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './my-calculator.component.html',
  styleUrls: ['./my-calculator.component.scss'],
})
export class MyCalculatorComponent {
  public first: number = 1;
  public second: number = 2;
  public selectedOperation: string = '+';
  public operations: string[] = ['+', '-', '*', '/'];
  public result?: number;
  public calc() {
    switch (this.selectedOperation) {
      case '+':
        this.result = this.first + this.second;
        break;
      case '-':
        this.result = this.first - this.second;
        break;
      case '*':
        this.result = this.first * this.second;
        break;
      case '/':
        this.result = this.first / this.second;
        break;
    }
  }
}
