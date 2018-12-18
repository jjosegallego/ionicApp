import { Component, OnInit } from '@angular/core';
import {DeseosServicio} from '../../services/deseos.service';
import {Lista} from '../../models/index';



@Component({
  selector: 'page-terminados',
  templateUrl: 'terminados.component.html'
})


export class TerminadosComponent implements OnInit {

	constructor(private _deseosServicio:DeseosServicio) {


  }

  ngOnInit() { }

  listaSeleccionada(lista:Lista){

    console.log(lista);

  }

}
