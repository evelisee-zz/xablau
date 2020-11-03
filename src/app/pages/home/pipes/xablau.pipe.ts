import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'xablau'
})
export class XablauPipe implements PipeTransform {

  transform(value: string): string {
    return `Xablau ${value}`;
  }

}
