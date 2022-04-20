const superhero=require("./../app/superhero")

describe("Unit Test for superhero", ()=>{

    test('Case 1: Get a superhero',()=>{
        const ironman= new superhero("Iron Man","Tony Stark", "Robert Dawney Jr.")

        expect(ironman.name).toBe("Iron Man")
        expect(ironman.actor).toBe("Robert Dawney Jr.")
        expect(ironman.heroName).toBe("Tony Stark")
    });
})