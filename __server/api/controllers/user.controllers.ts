import {services} from "../services/user.services";

const {createUser, getUser, getUsers, signIn}:services = new services;

export default class controllers{
    public signIn(req:any, res:any):void {

    }

    public createUser(req:any, res:any):void {
      const {username, password, url_image} = req.body;
      createUser(username, password, url_image);

      res.send("done!");
    }

    public getUser(req:any, res:any):void {
      const {id} = req.params;
      getUser(id).then(response=>{
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