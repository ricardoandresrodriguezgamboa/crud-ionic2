import {ServiceProvider} from "../../providers/service-provider";
import { Component } from '@angular/core';
import { HomePage } from '../home/home'
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Adduser page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-adduser',
  templateUrl: 'adduser.html',
})
export class Adduser {

  constructor(public navCtrl: NavController, public navParams: NavParams ,  public service : ServiceProvider) {
  }


  ionViewDidLoad() {
    
  }

  insertarDatos(req){
 
    this.service.InsertarUsuario(req.value)
    .subscribe(
      data=>console.log(data.mensage),
      err=>console.log(err)
    );
  }
  
  
  

}
