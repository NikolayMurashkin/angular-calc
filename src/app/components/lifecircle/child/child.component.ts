import {
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent
  implements
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterViewInit,
    OnDestroy,
    OnChanges
{
  @Input() title!: string;

  @Output() eventChangeTitle = new EventEmitter<string>();

  public tempTitle!: string;

  ngOnInit(): void {
    this.tempTitle = this.title;
  }

  ngDoCheck(): void {
    console.log('check');
  }

  ngAfterContentInit(): void {
    console.log('afterContentInit');
  }

  ngAfterViewInit(): void {
    console.log('afterViewInit');
  }

  ngOnDestroy(): void {
    console.log('onDestroy');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  public handleClick(): void {
    this.tempTitle = 'I am mutated';
    this.eventChangeTitle.emit(this.tempTitle);
  }
}
