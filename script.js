console.log("hola!");
alert("Wellcome");


let name="Fullstack";
let number=3;
number= number +2;//5 number+=2
number+=3; //8

function cruzarCalle() {
    //Semáforo
    let color = prompt("Introduzca color");

    if (color == "green") {
      console.log("Pasar");
    } else if (color == "yellow") {
      console.log("Pasar rápido");
    } else if (color == "blue") {
      console.log("Pasar saltando");
    } else {
      // Valor por defecto ---> ROJO
      console.log("No pasar");
    }
}

/* Semáforo
let color = prompt("Introduzca color");

if (color == "green") {
  console.log("Pasar");
} else if (color == "yellow") {
  console.log("Pasar rápido");
} else if (color == "blue") {
  console.log("Pasar saltando");
} else {
  // Valor por defecto ---> ROJO
  console.log("No pasar");
}
*/

function cruzarCalleSwitch (){
    //Semáforo
    let color = prompt("Introduzca color");
    switch (color) {
     case "green":
        console.log("Pasar");
        break;
     case "yellow":
            console.log("Pasar rápido");
            break;
     case "blue":
        console.log("Pasar saltando");
        break;
     default:
        console.log("No pasar");
    }
}

function encenderPc (){
    let option = prompt("Introduce opción");
    switch (option){
      case "reset":
        console.log("F.Reinicia sistema");
        break;
  
      case "start":
        console.log("F.Enciende PC");
        break;
  
      case "login":
        console.log("F.Loguearse en el sistema");
        break;
  
      default:
      console.log("Error de PC")
      break;
      
    }
  }

  /*for (i=0;i<10;i++) {
     console.log("El número es: "+i);
  }
  */

  function printYears() {
    for (let i=1996;i<=2022;i++){
      //N=26
  
      if (i%2==0){
        //PARES
        continue;
      
      if (i>2011) {
        break;
      }
      console.log("Año "+i);
      }
    }
  }


  function ejemploWhile () {
    let i= 1996; //variable de bucle se pone fuera del while
    while(i<=2022) { //condición de parada
  
      if(i%2==0) {
        i++;
        continue;
      }
  
      if(i>2011) {
        break;
      }
      console.log("Año "+i);
      i++;//Incremento variable de bucle
    }
  }


  function comprobarNombre() {
    let intentos = 0;
    while (intentos < 3) {
      let nombre = prompt("introduce nombre");
      if (nombre != "") {
        console.log("Nombre recibido: " + nombre);
        break;
      }else{
        console.log("Has mandado nombre vacío. Intento:"+(intentos+1));
        console.log("Te quedan "+(3-(intentos+1)));
      }

      if (intentos === 2) alert("3 intentos. Tu cuenta ha sido bloqueada");

      intentos++;
    }
  }

  // Bucle infinito, te va a dar la brasa en el prompt devolviendote infinitas veces el prompt de "introduceme algo"
/*
while(true){
    console.log("hola");
    let mensaje = prompt("introduce algo");
    if(mensaje.length > 0){ // para ver si el mensaje tiene algo
        console.log("Gracias. has enviado: "+mensaje);
        break; // rompe bucle
    }else{
        console.log("Mo enviaste nada");
    }
}
*/

//git add .
//git commit -m "primera subida"
//git push

//new Date().getDay() para hacer un switch con los dias de lala semana
//si tento que ver si un condicional es true o false uso while
//Llamadas a la función(para ejecutarlas)
//cruzarCalle();
//cruzarCalleSwitch();
//encenderPc();
//printYears();