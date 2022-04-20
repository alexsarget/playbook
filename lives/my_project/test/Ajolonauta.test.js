const Ajolonauta = require("./../app/Ajolonauta");
const { TestWatcher } = require("./../app/Ajolonauta")

describe("Pruebas de unnidad de Ajolonauta", ()=>{
    test('Caso de prueba 1: Creación de objeto',()=>{
        //Aqui puedes usar el codigo como lo  deseas utilizar
        const woopa=new Ajolonauta("Woopa")


        //Validar el resultado esperado
        expect(woopa.name).toBe("Woopa");
    });
})