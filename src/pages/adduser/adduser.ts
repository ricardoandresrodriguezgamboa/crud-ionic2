import { FormBuilder, Validators } from '@angular/forms';
import {ServiceProvider} from "../../providers/service-provider";
import { Component } from '@angular/core';
import { HomePage } from '../home/home'
import { AlertController } from 'ionic-angular';

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

  insertar : any = {};

     constructor(public navCtrl: NavController, 
                  public formBuilder : FormBuilder, 
                  public service : ServiceProvider,
                  public alertCtrl: AlertController) {
            this.insertar = this.formBuilder.group({
                  nombre:['', Validators.required],
                  email:['', Validators.required],
                  pass:['', Validators.required]
            });
}




  insertarDatos(){
     
     /*console.log(this.insertar.value);*/

    this.service.InsertarUsuario(this.insertar.value)
    .subscribe(
      data=>console.log(data.mensage),
      err=>console.log(err)
    );
  }
  
  
  

}
