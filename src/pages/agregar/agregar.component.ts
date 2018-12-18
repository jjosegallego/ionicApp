import { Component, OnInit } from '@angular/core';
import {DeseosServicio} from '../../services/deseos.service';
import {Lista,ListaItem} from '../../models/index';
import {NavParams} from 'ionic-angular';

@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.component.html'
})

export class AgregarComponent implements OnInit {

  listak: Lista;
  nombreItem:string='';

	constructor( private _deseosServicio:DeseosServicio, private nav:NavParams) {

    console.log(this._deseosServicio.listas);
    //console.log('El titulo es: '+this.nav.get('titulo')); //se extrae lo que se esta enviando de pendientes.component
    if(this.nav.get('lista')){ //si la lista existe en memoria
      console.log('Llegue desde el local');
      console.log("\n");
      console.log('el objeto del local es: ');
      console.log(this.nav.get('lista'));
      this.listak=this.nav.get('lista');
    }else{
      console.log('Llegue nuevo a agregar.component');
      this.listak= new Lista(this.nav.get('titulo')); //se crea una nueva lista
      this._deseosServicio.agregarLista(this.listak); //se lleva la lista al servicio para poder armar la interfaz en pendientes.component.html
    }

  }

  agregarItem(){
    console.log('Se esta agregando un nuevo item: ');
    console.log(this.nombreItem);
    const nuevoitem = new ListaItem(this.nombreItem);
    this.listak.items.push(nuevoitem);
    this.nombreItem='';
    this._deseosServicio.guardarStorage();
  }

  atualizarTarea(item:ListaItem, idx:number){

    item.completado=!item.completado;
    let numeroItems=this.listak.items.length
    let contador=0;
    for(let i=0; i<numeroItems; i++){
      if(this.listak.items[i].completado==true){
        contador++;
      }
    }
    if(contador==numeroItems){
      this.listak.terminada=true;
      this.listak.terminadaFecha=new Date();
    }else{
      this.listak.terminada=false;
      delete(this.listak.terminadaFecha);
    }

    this._deseosServicio.guardarStorage();
  }

  borrarItem(i:number){
    this.listak.items.splice(i,1); //desde que posicion i quiero borrar y cuantos hacia alla quiero borrar
    this._deseosServicio.guardarStorage();
  }






  ngOnInit() { }

}
