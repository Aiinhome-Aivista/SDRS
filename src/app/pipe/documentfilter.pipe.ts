import { Pipe, PipeTransform } from '@angular/core';
import { truncate } from 'fs';

@Pipe({
  name: 'documentfilter'
})
export class DocumentfilterPipe implements PipeTransform {

  transform(items: any[], searchText:string,fieldName:string[]):any[]{
    if(!items) {return [];}
    if(!searchText){return items;}
    let flag =false
    searchText=searchText.toLocaleLowerCase()
    return items.filter(item=>{
      flag =false
      for (let i=0;i<fieldName.length;i++){
        if(item && item[fieldName[i]] && item[fieldName[i]].toLowerCase().includes(searchText)){
          flag =true
          break;
        }
      }
      if(flag){
        return true;
      }else{
       return false;
      }
    })
  }

}
