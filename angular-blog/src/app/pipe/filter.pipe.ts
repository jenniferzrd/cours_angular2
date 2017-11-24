import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, search?: any): any {
    if(search) search = search.toLowerCase();
    return items.filter((item) => {
      let foundInName = item.name.toLowerCase().includes(search);
      let foundInResume = item.resume.toLowerCase().includes(search);
      return (foundInName || foundInResume);
    });
  }

}
