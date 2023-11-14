/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   

   let objetoFinal = Object.entries(objeto);
   return objetoFinal;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let contadorLetras = {};
   for( i = 0; i < string.length; i++){
      if(!contadorLetras[string[i]]){
         contadorLetras[string[i]] = 1;
      }else{
         contadorLetras[string[i]]++;
      }
   }

   return contadorLetras;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   var mayusculas = [];
   var minúsculas = [];

   for(var letter of string){

      if(letter === letter.toUpperCase()){
         mayusculas.push(letter)
      }else{
         minúsculas.push(letter)
      }
   }

   return mayusculas.join('') + minúsculas.join('');
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   const palabras = frase.split(" ");
   let stringReturn = "";

   for(i = 0; i < palabras.length; i++){
      let palabrasInvertidas = "";
      for(j = palabras[i].length - 1;j >= 0; j--){
         palabrasInvertidas += palabras[i][j];
      }
      stringReturn += palabrasInvertidas + " ";
   }

   return stringReturn.trim();

}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

   let num = numero.toString().split('');

   for( i = 0, j=num.length -1 ; i <= j; i++, j--){
      if(num[i] !== num[j]){
         return "No es capicua";
      }else return "Es capicua";
   }
}  

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let frase = string.split('');
   let newArray = [];
   for(i = 0; i< frase.length ; i++){
      if(frase[i] !== "a" && frase[i] !== "b" && frase[i] !== "c"){
         newArray.push(frase[i]);
      }
      
   }
   let fraseFinal = newArray.join('');
   return fraseFinal;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   let newArray = arrayOfStrings;
   newArray.sort((a,b) => a.length - b.length);

   return newArray;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var inter = [];

   for(i = 0; i < array1.length; i++){
      if(array2.includes(array1[i])){
         inter.push(array1[i]);
      }
   }
   return inter;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
