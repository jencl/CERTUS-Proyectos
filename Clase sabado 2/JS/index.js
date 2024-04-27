function sumar(a,b){
    var c = a+b;
    document.getElementById("resultado").innerHTML="Resultado: "+c;

    var a = 4;
    console.log(a);
    console.log(typeof(a));

    var b = "4";
    console.log(b);
    console.log(typeof(b));
    return c ;
}

document.write((20==20) && (19==18)+"<br>");
document.write((20==="20")||(19===19)+"<br>");
document.write(!(20>10)+"<br>");
document.write((2<20)+"<br>");
document.write((20!==20)+"<br>");

/*Ternario*/
var edad = 16 ;
var resultado = (edad>18)? "Mayor de edad<br>":"menor de edad<br>";
document.write("Ramiro tiene"+edad+" años,  es "+resultado)

/*Condicionales*/
if(edad>=18)
    document.write(" Ramiro tiene "+edad+" años,  es mayor de edad <br>")
else if (edad>15 && edad<18)
    document.write(" Ramiro tiene "+edad+" años,  es adolescente<br>")
else
    document.write(" Ramiro tiene "+edad+" años,  es menor de edad <br>")

/*Switch*/
var arreglo = 3;
switch (arreglo) {
    case 2:
        document.write("Solicito 2 arreglos florales<br>")
        document.write(sumar(2,2))
        break;
    case 3:
        document.write("Solicito 3 arreglos florales<br>")
        document.write(sumar(3,3)+"<br>")
        break;    

    default:
        document.write("Solicito 0 arreglos florales<br>")
        document.write(sumar(1,0)+"<br>")
        
}    

/*Bucles*/
  var datos = ["Juan", "Pedro", "Lucía", "Fernanda"];
  var edades =[22, 32, 26, 28];
  var sexo = ['M','M','F','F']
/*acumulador: for..*/
  for(let index = 0; index< datos.length; index++){
    document.write("<p> Me encuentro en la repetición "+index+"</p>")
    var a = (sexo[index]=='F')? "a":"o";
    document.write("<p>Alumn"+a+" " +datos[index]+ "</p>")
  }
  document.write('<h2 style="background-color: aqua";>For of</h2>')
  
  for(const element of datos){
    document.write("<p>Estudiante: "+element+"</p>")
  }
  for(const element of edades){
    document.write("<p>Estudiante: "+edad+"</p>")
  }

  var producto = {
    codigo: "A23F01",
    nombre: "Televisior",
    precio:2499.99,
    colores:["negro", "plata"],
    calcularIgv: function(){
      return this.precio*0.19;
    }
}
    for(const propiedad in producto){
      if(producto.hasOwnProperty(propiedad)){
        const elemento = producto[propiedad];
        document.write(elemento+"<br>");
      }
}
    

  

