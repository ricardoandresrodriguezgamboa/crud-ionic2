import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Adduser } from '../adduser/adduser';
import { ServiceProvider } from "../../providers/service-provider";
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


   users : any[];
   nombre : boolean = true;
   teste : string = "prueba";
   
  constructor(public navCtrl: NavController , public service : ServiceProvider, public alertCtrl: AlertController) {

}
  
  ionViewWillEnter(){
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
    
         borrarUser(user) {
            // console.log(user);
            // console.log(user.id);
            this.service.BorrarUsuario(user.id)
                  .subscribe(
                        data=>{
                              console.log(data.mensage);
                               this.getMostrar();
                        },
                        err=>console.log(err)
                  );
        }

      
     editarUser(req) {
          let prompt = this.alertCtrl.create({
            title: 'Editar Usuario',
            inputs: [
              {
                name: 'nombre',
                placeholder: 'Nombre',
                value:req.nombre
              },
              {
                name: 'email',
                placeholder: 'Email',
                value:req.email
              },
            ],
            buttons: [
              {
                text: 'Cancelar',
                handler: data => {}
              },
              {
                text: 'Guardar',
                handler: data => {

                  let params:any={
                        id: req.id,
                        nombre: data.nombre,
                        email: data.email
                  }
                  //console.log(params);
                this.service.ModificarUsuario(params)
                  .subscribe(
                        data=>{
                              console.log(data.mensage);
                              this.getMostrar();
                              },
                        err=>console.log(err)
                    );
                }
              }
            ]
          });
          prompt.present();
}


}
