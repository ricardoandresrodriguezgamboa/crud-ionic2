import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Adduser } from '../adduser/adduser';
import {ServiceProvider} from "../../providers/service-provider";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


   users : any[];

   teste : string = "prueba";
   
  constructor(public navCtrl: NavController , public service : ServiceProvider) {
  this.getMostrar();
  }
      
    onLoadAddUser(){
    this.navCtrl.push(Adduser);
  }

    getMostrar(){
      this.service.MostrarUsuarios().subscribe(
        data => this.users = data,
        err => console.log(err)
      );      
    }



}
