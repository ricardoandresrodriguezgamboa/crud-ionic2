import { Injectable } from '@angular/core';
import { Http , Headers, Response , ResponseOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";


/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ServiceProvider {

   api : string = "https://ricardo123123.000webhostapp.com/";

  constructor(public http: Http) {
    /*console.log('Hello ServiceProvider Provider');*/
    //this.MostrarUsuarios();

  }

      MostrarUsuarios(){
      
      var response = this.http.get(this.api + 'mostrar.php').map(res=> res.json())
      return response;
   
    }

      InsertarUsuario(params)
    {   
         let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded'});
          return this.http.post(this.api + 'insertar.php' , params,{ 
           headers:headers,
           method:"POST",
         }).map(
           (res:Response) => {return res.json();}
         );  
      }

         BorrarUsuario(id)
    {   
         let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded'});
          return this.http.post(this.api + 'borrar.php' , id,{ 
           headers:headers,
           method:"POST",
         }).map(
           (res:Response) => {return res.json();}
         );  
      }

        ModificarUsuario(data) {
            let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
            return this.http.post(this.api + "modificar.php", data, {
                  headers:headers,
                  method:"POST"
            }).map(
                  (res:Response) => {return res.json();}
            );
        }
    
       
   
}
