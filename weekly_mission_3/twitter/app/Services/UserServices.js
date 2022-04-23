const User=require('./../models/User')

class UserService{
    static create(id,username, name){
        return new User(id, username, name, "Sin Bio")
    }

    static getInfo(user){
        return user=[user.id,user.username,user.name,"Sin Bio"]
    }
    static updateUsername(user,username){
        user.username=username
    }
    
    static getAllUsernames(usernames){
        const userNames=usernames.map(user=>user.username)
        return userNames
    }
    
}
module.exports=UserService