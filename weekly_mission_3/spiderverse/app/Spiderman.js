class Spiderman {
    constructor(name, age, actor, movies, studio){
    this.name=name
    this.age=age
    this.actor=actor
    this.movies=movies
    this.studio=studio
    }

    getInfo(){
        return  `Hey, I'm ${this. actor} from ${this.studio} studios`
    }
}

//Esta linea nos permite exportar nuestra clase
module.exports=Spiderman