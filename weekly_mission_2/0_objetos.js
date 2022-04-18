// Ejercicio 1: crear un objeto vacio
const MyAtas={}
console.log("Ejercicio 1: Crear objeto vacio")
console.log(MyAtas)

//Ejercicio 2: Crear un objeto con propiedades
const MyAtas2={
    name:"Alejandro",
    age: 27 
}

console.log("Ejercicio 2: Crear un objeto con propiedades")
console.log(MyAtas2)

// Ejercicio 3: Objeto con diferentes propiedades 
const myAtas3={
    name:"CDMX",
    age: 5,
    nicknames:[
        "Coyoacan",
        "Xochimilco",
        "Venustiano Carranza",
    ],

    address:{
        zip_code:"15900",
        street:"Av. Francisco del paso y troncoso",
        city: "CDMX"
    }
}
console.log("Ejercicio 3: Objeto con diferentes propiedades")
console.log(myAtas3)
console.log(myAtas3.name)
console.log(myAtas3["address"])

// Ejemplo 4: Objeto con métodos
const pet = {
  
    name: "Canela",
    // Esta es una función que se guarda como propiedad
    sayHello: function(){
      // this.name hace referencia a la propiedad del objeto
      console.log(`${this.name} te saluda en español!`)
    }
  }
  
console.log("Ejemplo 4: Objeto con métodos")
pet.sayHello()

// Ejemplo 5: Objeto con método que recibe parámetros
const myPet = {
    name: "Woopa",
    sayHelloToMyPet: function(yourPet){
      console.log(`${this.name} say's hello to ${yourPet}`)
    }
  }
  
  console.log("Ejemplo 5: Objeto con método que recibe parámetros")
  myPet.sayHelloToMyPet("Tulio")
  