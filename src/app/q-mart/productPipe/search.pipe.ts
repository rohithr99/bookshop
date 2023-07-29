import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(productsData:any, searchString: string, propertyName: string): any {
    
    const result : any = [];

    if(!productsData || searchString == "" || propertyName == "" ){
      return productsData;
    }
    else{
      productsData.forEach((element: any) => {
          if(element[propertyName].trim().toLowerCase().includes(searchString.trim().toLowerCase())){
            result.push(element);
          }
      });
      return result;
    }
  }

}
