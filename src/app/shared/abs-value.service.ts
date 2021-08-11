import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AbsValueService {

  constructor() { }
}

@Pipe({
  name:'absValue'
})

export class AbsValue implements PipeTransform {

  dislike:any;

  transform(value: any): number {
    if (value <0){
      return this.dislike = Math.abs(value);
    } else{
      return value;
    }
  }
}
