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
    console.log("Nombre del usuario " + whatsapp.name)
    console.log(whatsapp.getGeneralinf())
    console.log(whatsapp.getTotalnotf())