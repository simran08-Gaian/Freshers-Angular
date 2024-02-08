import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCustom'
})
export class CustomPipe implements PipeTransform {

  transform(value: string): string {
    if(value === ''){
      return value 
    }else{
      return ` ${value} ${crypto.randomUUID()}`
    }
  }

}
