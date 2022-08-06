import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown

  transform(ninjas: any, term: any): any

  {

    // check if search term is undefined
    if (term == undefined || term == '')  return ninjas;
    // return updated ninjas array
    return ninjas.filter(function(ninja:any) {

      // console.log(ninjas)

      return ninja.name.toLowerCase().includes(term.toLowerCase());

    });


  }

}
