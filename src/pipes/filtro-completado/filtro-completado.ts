import { Pipe, PipeTransform } from '@angular/core';
import {Lista,ListaItem} from '../../models/index';

@Pipe({
  name: 'filtroCompletado',pure:false
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform(listas:Lista[],completado:boolean) {

    return listas.filter(datos=>{
      return datos.terminada==completado;
    });



  }
}
