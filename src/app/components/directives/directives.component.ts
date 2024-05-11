import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MyChangeColorDirective } from './directive/my-change-color-directive.directive';
import { MyIfDirective } from './directive/my-if.directive';

@Component({
  selector: 'my-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
  standalone: true,
  imports: [CommonModule, MyChangeColorDirective, MyIfDirective],
})
export class DirectivesPageComponent {
  public colors = ['red', 'blue', 'green', 'yellow'];
  public isShow = true;
  public currentColor = this.colors[0];
  public elementStyle: any = {
    color: 'red',
    opacity: 0.5,
  };

  public setIsShow() {
    this.isShow = !this.isShow;
  }
}
