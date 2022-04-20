//REQUERIMIENTOS 
/**
 * Modela  los siguientes  diagramas  en objetos de JS
 * (usa los console.log() para verificar que funcione)
 */

const whatsapp={
    name:"Username",
    user:"Nickname",
    foto:"Photo.jpg",
    contactos:100,
    notificaciones:40,
    mensajes:250,
    imagenes:300,

    getTotalnotf: function() { return `You have ${this.notificaciones} notification and ${this.mensajes} messages`},
    
    getGeneralinf: function(){return `This User ${this.user} have ${this.contactos} contacts`},
}
    console.log("INFORMACIÓN DEL WHATSAPP")
    console.log("Nombre del usuario " + whatsapp.name)
    console.log(whatsapp.getGeneralinf())
    console.log(whatsapp.getTotalnotf())

    const estados={
        user:"UserName",
        mi_hist:2,
        contacto:"Nombre_Cont",
        cant:4,


    
        getnotf: function() { return `The user ${this.user}  have ${this.mi_hist} storys `},
        
        getContinf: function(){return `Your friend ${this.contacto} have ${this.cant} storys`},
    }
        console.log("INFORMACIÓN DE LOS ESTADOS")
        console.log("Nombre del usuario " + estados.user)
        console.log(whatsapp.getGeneralinf())
        console.log(whatsapp.getTotalnotf())

