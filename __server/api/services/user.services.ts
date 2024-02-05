import { response } from "express";
import User from "../models/user.model";
import {crypto} from "../utility/crypto";

const {comparePassword, encryptPassword}:crypto = new crypto;

export class services{
    async signIn(username:string, password:string){
        return await User.findOne({
            where:{
                USERNAME: username
            }
        })
    }

    async createUser(username:string, password:string, url_image:string, full_name:string, email:string){
        await User.create({
            ID_USER: null,
            USERNAME: username,
            USER_PASSWORD: await encryptPassword(password),
            FULL_NAME: full_name,
            EMAIL: email,
            URL_IMAGE: url_image,
            createdAt: new Date(),
            updatedAt: new Date()
        });
    }

    async getUser(user_id:number){
        return await User.findByPk(user_id);
    }

    async getUserById(USERNAME:string){
        return await User.findOne({
            where: {
                USERNAME
            }
        })
    }

    async getUsers(){
        return await User.findAll();
    }
}