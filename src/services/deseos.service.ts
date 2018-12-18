import { Injectable } from '@angular/core';
import {Lista} from '../models/index';


@Injectable()
export class DeseosServicio {

  listas: Lista[]=[];

  constructor() {
    this.cargarStorage();
  }

  agregarLista(lista:Lista){
    console.log('se agrego una lista nueva al servicio')
    this.listas.push( lista );
    this.guardarStorage();
  }

  borrarLista(lista:Lista){
    this.listas=this.listas.filter(datosFiltrados=>{
      return datosFiltrados.id!=lista.id;
    });
    this.guardarStorage();
  }

  guardarStorage(){
    localStorage.setItem('data',JSON.stringify(this.listas));
  }

  cargarStorage(){
    if(localStorage.getItem('data')){
      this.listas=JSON.parse(localStorage.getItem('data'));
    }
  }


}
