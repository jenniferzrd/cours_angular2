import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simple'
})
export class SimplePipe implements PipeTransform {

  transform(posts){
    return posts.map( post => {
      post.title = post.title.toUpperCase();
      return post;
    });
  }

}

// a la valeur de mon tableau de post = posts
// 