import { Component, OnInit } from '@angular/core';
import {DeseosServicio} from '../../services/deseos.service';
import {Lista} from '../../models/index';
import { NavController } from 'ionic-angular';
import { AgregarComponent} from '../agregar/agregar.component';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.component.html'
})


export class PendientesComponent implements OnInit {

	constructor( private _deseosServicio:DeseosServicio, private navCtrl:NavController,
   private alertCtrl:AlertController) {

  }

  ngOnInit() { }



  agregarLista(){
    const alerta=this.alertCtrl.create({
      title: 'Agrega una lista nueva',
      message: 'Nombre de la nueva Lista que desea:',

      inputs:[{
        name:'titulo',
        placeholder:'Nombre de la lista'
      }],

      buttons:[{
        text:'cancelar'
      },{
        text:'Agregar',
        handler:data=>{ //dato que se recoge en el popover
          if(data.titulo.length==0){
            return;
          }
          this.navCtrl.push(AgregarComponent,{ //envio dat.titulo a la siguiente ventana
            titulo:data.titulo
          }); //con esto navego entre paginas
          console.log('se creo nueva lista '+data);
        }
      }]

    });
    alerta.present();
  }




}
