import { Pipe, PipeTransform } from '@angular/core';
import { ITEMS } from '../posts/posts.component';

@Pipe({
  name: 'filterDate'
})
export class FilterDatePipe implements PipeTransform {

  transform(items: any, order?: any): any {
    
          return items.sort((a: any, b: any) => {
    
            let date1 = new Date(a.date);
            let date2 = new Date(b.date);
    
            if (order) {
    
              if (date1 > date2) {
                  return 1;
              } else if (date1 < date2) {
                  return -1;
              } else {
                  return 0;
              }
            } else {
              if (date1 < date2) {
                  return 1;
              } else if (date1 > date2) {
                  return -1;
              } else {
                  return 0;
              }
            }
    
                 });
    }

}
