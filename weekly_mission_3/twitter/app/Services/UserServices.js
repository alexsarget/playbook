const User=require('./../models/User')

class UserService{
    static create(id,username, name){
        return new User(id, username, name, "Sin Bio")
    }

    static getInfo(user){
        return user=[user.id,user.username,user.name,"Sin Bio"]
    }
    static updateUsername(user,name){
        return  user=[name]
    }
}

module.exports=UserService