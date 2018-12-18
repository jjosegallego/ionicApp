import { Component, OnInit,Input } from '@angular/core';
import {DeseosServicio} from '../services/deseos.service';
import {Lista} from '../models/index';
import { NavController } from 'ionic-angular';
import { AgregarComponent} from '../pages/agregar/agregar.component';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'app-listas',
  templateUrl: 'listas.component.html'
})


export class ListasComponent implements OnInit {

  @Input() terminada: boolean=false;

	constructor(private _deseosServicio:DeseosServicio,private navCtrl:NavController,
              private alertCtrl:AlertController) {


  }

  ngOnInit() { }

	listaSeleccionada(lista:Lista){
		this.navCtrl.push(AgregarComponent,{titulo:lista.titulo,lista:lista});
	}

	borrarLista(lista:Lista){
		this._deseosServicio.borrarLista(lista);
	}

  editarLista(lista:Lista, slidingItem){
    const alerta=this.alertCtrl.create({
      title: 'Edita el nombre de tu lista',
      message: 'Nombre de la nueva Lista que desea:',

      inputs:[{
        name:'titulo',
        placeholder:'Nombre de la lista',
        value:lista.titulo
      }],

      buttons:[{
        text:'cancelar'
      },{
        text:'Actualizar',
        handler:data=>{ //dato que se recoge en el popover
          if(data.titulo.length==0){
            return;
          }
          lista.titulo=data.titulo;
          slidingItem.close();
          this._deseosServicio.guardarStorage();
        }
      }]

    });
    alerta.present();
  }

}
