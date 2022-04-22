const UserService= require("./../../app/Services/UserServices")

describe("Test for UserService", ()=>{

    test("1. Create a new user using the UserServices",()=>{
        const user= UserService.create(1, "AlejandroAguilar", "Alex")
        expect(user.username).toBe("AlejandroAguilar")
        expect(user.name).toBe("Alex")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    }),

    test("2. Get all user data in a list ", ()=>{
        const user =UserService.create(1,"AlejandroAguilar", "Alejandro")
        const userInfoInList =UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("AlejandroAguilar")
        expect(userInfoInList[2]).toBe("Alejandro")
        expect(userInfoInList[3]).toBe("Sin Bio")
    })

    test("3. Update username",()=>{
        const user= UserService.create(1,"AlejandroAguilar","Alejandro")
        UserService.updateUsername(user,"Carlog")
        expect(user.username).toBe("Carlog")
    })
})

