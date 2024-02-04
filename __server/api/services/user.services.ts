import User from "../models/user.model";
import {crypto} from "../utility/crypto";

const {decryptPassword, encryptPassword}:crypto = new crypto;

export class services{
    signIn(){
        User.findOne({
            where:{
                
            }
        })
    }

    createUser(username:string, password:string, url_image:string){
        User.create({
            ID_USER: null,
            USERNAME: username,
            USER_PASSWORD: encryptPassword(password),
            URL_IMAGE: url_image,
            createdAt: new Date(),
            updatedAt: new Date()
        });
    }

    async getUser(id:number){
        return await User.findByPk(1);
    }

    async getUsers(){
        return await User.findAll();
    }
}