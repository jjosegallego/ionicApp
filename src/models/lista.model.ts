import {ListaItem} from './lista-item.model';


export class Lista {

	id:number;
	titulo:string;
	creadaFecha:Date;
	terminadaFecha:Date;
	terminada:boolean;
	items:ListaItem[];


	constructor( titulo:string ){

		this.titulo=titulo;

		this.terminada=false;
		this.creadaFecha= new Date();
		this.items=[];

		this.id=new Date().getTime();



	}

}
