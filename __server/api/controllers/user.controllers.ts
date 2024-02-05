import { response } from "express";
import {services} from "../services/user.services";
import { crypto } from "../utility/crypto";
import jwt from "jsonwebtoken";

const {comparePassword}:crypto = new crypto;
const {createUser, getUser, getUserById, getUsers, signIn}:services = new services;

export default class controllers{
    public signIn(req:any, res:any):void {
      const {username, password} = req.body;
      signIn(username, password).then(async (resp:any)=>{
        console.log(resp)

        if(!resp){
          res.json({
            auth:false
          });

          return;
        }

        const {dataValues}:any = resp;

        const response = await comparePassword(password, dataValues.USER_PASSWORD);
        if(response && dataValues != null){
          const token:string = jwt.sign(dataValues, "20040915", {
            expiresIn: 3000
          });

          req.session.user = dataValues;

          res.json({...dataValues, auth: response, token:token});  

          return;
        }

        res.json({
          auth: response
        });

        console.log(await comparePassword(password, dataValues.USER_PASSWORD));
      })
    }

    public isUserAuth(req:any, res:any):void {
      res.json({
        auth: true
      });
    }

    public createUser(req:any, res:any):void {
      const {username, password, url_image, full_name, email} = req.body;
      createUser(username, password, url_image, full_name, email)
      .then(response=> res.send(response))

      res.send("done!");
    }

    public getUser(req:any, res:any){
      const token = req.get("authorization");
      console.log(token);

      jwt.verify(token, "20040915", (err:any, decoded:any)=>{
        console.log(decoded)
        getUser(decoded.ID_USER)
        .then(response=>{
          res.json(response);
        })
      });
    }

    public getUserById(req:any, res:any):void {
      const {username} = req.params;
      getUserById(username).then(response=>{
        res.json(response);
      })
    }

    public getUsers(req:any, res:any):void {
      getUsers()
      .then(response=>{
        res.json(response);
      });

    }
}