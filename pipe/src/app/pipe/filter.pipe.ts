import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(chickens: any, search?: any): any {
    if(search) search = search.toLowerCase();
    // si le search existe passe le en lowercase
    return chickens.filter((chicken) => {
      let foundInName = chicken.name.toLowerCase().includes(search);
      // est ce que cela inclu la chaine de chara définit par search ?
      let foundInHobby = chicken.hobby.toLowerCase().includes(search);
      return (foundInName || foundInHobby);
      // est il dans le nom ou le hobby, tu me les renvoies
    });
    // Je fouille chaque chiken dans mon tableau de chikenS

  }

}

// ICI IL FILTRE CE QUE JE VAIS ENVOYER