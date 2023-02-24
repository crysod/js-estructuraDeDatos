En este desafío tendrás que crear tu propia implementación del método shift.

Contrario al reto anterior, aquí tendrás que hacer tu propio método shift para borrar el primer elemento que exista en tu array y retornar el elemento eliminado (no olvides modificar la longitud).

En caso de ser un array vacío, este método deberá devolver undefined.

Tu implementación debería tener un input y output como los siguientes:

Input
***
const myArray = new BetterArray()
myArray.unshift("Suerte")
myArray.unshift("Con el")
myArray.unshift("desafio")
myArray.unshift("platzinauta")
myArray.unshift("Un 🐱 random en el desafío")

myArray.shift()
***
Output

***"Un 🐱 random en el desafío"***

//************************************************************************

En este desafío tendrás que crear tu propia implementación del método unshift.

La implementación del método unshift nos debe permitir agregar un elemento al inicio de un array y retornar la nueva longitud del array. En caso de no enviar ningún elemento, este de igual forma nos retornará la longitud actual.

La solución debería tener un input y output como los siguientes:

Input
***
const myArray = new MyArray()

myArray.unshift("!!!")
myArray.unshift("Platzinauta")
myArray.unshift("lograste")
myArray.unshift("lo")

myArray.data
***
myArray.data retorna todos los elementos de nuestro array, no te debes preocupar por esta parte, ya está implementado en el código.

Output
***
1
2
3
4

{ 0: "lo", 1: "Lograste", 2: "Platzinauta", 3: "!!!" }
***