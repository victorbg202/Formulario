import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Formulario';

  mostrarInfo: string = "";
  mostrarInfo2: string = "";
  erDNI = '^[0-9]{8}[A-Za-z]{1}$';

  enviarDatos(nombre, dni, mensaje){
    if(nombre.value == ""){
      alert("El nombre esta vacio");
    }

    if(dni.match(this.erDNI)){
      this.mostrarInfo = "DNI correcto";
    }else{
      this.mostrarInfo = "DNI incorrecto";
    }

    if(mensaje.length < 2){
      this.mostrarInfo2 = "El texto es demasiado corto";
    }

  }
}
