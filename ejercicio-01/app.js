// Declaramos las variables con const ya que no van a variar si no sería con let
const texto="Hola, me llamo Aurora";
const numero=3;
const boleano=true;
const nulo=null;
const indefinido=undefined;
const array=["morado", "azul", "rojo", "amarillo"];
const objeto={animal: "gato", raza: "romano atigrado", edad: 5}

// Mostramos los datos con los diferentes tipos de console...
console.log("La variable texto contiene: "+texto+ ". Y es de tipo: "+typeof texto);
console.error("La variable numero contiene: "+numero+ ". Y es de tipo: "+typeof numero);
console.info("La variable boleano contiene: "+boleano+ ". Y es de tipo: "+typeof boleano);
console.debug("La variable nulo contiene: "+nulo+ ". Y es de tipo: "+typeof nulo);
console.log("La variable indefinido contiene: "+indefinido+ ". Y es de tipo: "+typeof indefinido);
console.error("La variable array contiene: "+array+ ". Y es de tipo: "+typeof array);
console.info("La variable objeto contiene: "+JSON.stringify(objeto)+ ". Y es de tipo: "+typeof objeto);