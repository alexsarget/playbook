//let para una nueva variable 
let myCar = new Object();
myCar.model="Audi"

const myModule= (()=>{
    const privateFoo="No quiero que vean esto"

    const exported={
        publicFoo:"Quiero que vean esto!"
    }

    return exported
})

console.log(myModule.privateFoo)
console.log(myModule.publicFoo)
