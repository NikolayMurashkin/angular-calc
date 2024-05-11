import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCustom',
  standalone: true,
})
export class MyCustomPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return value.split('').reverse().join('');
  }
}
