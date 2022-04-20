const Spiderman= require("./../app/Spiderman")
describe("Unit Test for Spiderman class",()=>{
    /*
    test('1) Create an spiderman objet',()=>{
        //Aqui escibimos el codigo que queremos usar ta cual
        //Quiero poder instanciar un objeto Spiderman con esta información
        
        
        const andrew= new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")

        expect(andrew.name).toBe("Spiderman Sony");
        expect(andrew.age).toBe(31);
        expect(andrew.actor).toBe("Andrew Garfield");
        expect(andrew.movies).toBe(2);
        expect(andrew.studio).toBe("Sony");
    });*/

    test('2) Use the method getInfo()',()=>{
        const tomholland= new Spiderman("SpidermanMarvel",25,"Tom Holland", 5, "Marvel")
        expect(tomholland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studios")
    });
})