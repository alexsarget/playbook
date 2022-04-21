const User = require("../../app/models/User")


describe("Unit Test for User class", ()=>{
    
    test('Create an User object',()=>{
        //Aqui invocas el codigo que vas a usar en tu app
        const user= new User(2, "AlejandroAguilar", "Alejandro", "Bio")
        // Aqui validamos los resultados de este codigo
        //Esta es una comparación  que va a igualar el valor de la izquierda con el valor de la derecha (valor esperado)
        expect(user.id).toBe(2)
        expect(user.username).toBe("AlejandroAguilar")
        expect(user.name).toBe("Alejandro")
        expect(user.bio).toBe("Bio")
    });

    test("Requerimientos 2: Fechas en atributos de User",()=>{
        const user=new User(2,"AlejandroAguilar","Alejandro","Bio")
        expect(user.id).toBe(2)
        expect(user.username).toBe("AlejandroAguilar")
        expect(user.name).toBe("Alejandro")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    });
    
    test("Requerimientos 3: Agregando getters",()=>{
        const user=new User(1,"AlejandroAguilar","Alejandro","Bio")
        expect(user.getUsername).toBe("AlejandroAguilar")
        
    });
    test("Requerimientos 4: Agregando setters",()=>{
        const user=new User(1,"AlejandroAguilar","Alejandro","Bio")
        user.setUsername="alexagui"
        expect(user.username).toBe("alexagui")
    });
})