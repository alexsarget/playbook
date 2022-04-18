console.log("POO")

//Objeto js 
const woopa_obj={
    name:"Woopa",
    mission:"Node js",
    age:"12",
    color:"pink"
}

//crear una clase 
/*
1.como crear una clase 
2. Como instanciar un objeto de una clase
3. Instanciar varios objetos de una misma clase
4. Comoagregar el conctrutor para guardar atributos
5. Metodos
*/

// crear clase 
class Ajolonauta {
    constructor(name, mission, age, color){
        this.name= name
        this.mission=mission
        this.age=age
        this.color=color
    }
    sayhello(){
        return `Hey Hello ${this.name} is saying Hello`
    }
}

class pokemon{
    constructor(name){
        this.name=name
    }
}

const pikachu= new pokemon("Pikachu")
//console.log(pikachu.sayhello())
console.log(pikachu)


console.log(Ajolonauta)


const woopa=new Ajolonauta("Woopa","Node js", 18, "pink")//Instancias
console.log(woopa)
console.log(woopa.sayhello())

const wooper =new Ajolonauta("Wooper","java", 10, "blue")
console.log(wooper.name)
console.log(wooper.sayhello())


// Objeto de JS
const woopa_obj_js={}
console.log(woopa_obj_js)





