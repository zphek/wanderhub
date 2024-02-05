import {services} from "../services/discussion.services";
import jwt, { decode } from "jsonwebtoken";
const {createDiscussion, getDiscussion, getDiscussions}:services = new services;

export default class controllers{
    public createDiscussion(req:any, res:any):void {
        const {topic, description} = req.body;

        const token = req.get("authorization");
        // console.log(token);

        jwt.verify(token, '20040915', (err:any, decoded:any)=>{
            // console.log(decoded)

            createDiscussion(decoded.ID_USER, topic, description)
            .then(response=>{
                res.json(response);
            });
        });
    }

    public getDiscussion(req:any, res:any){
        let {id} = req.params;
        getDiscussion(id)
        .then(response=>{
            res.json(response);
        })
    }

    public getDiscussions(req:any, res:any){
        getDiscussions()
        .then(response=>{
            res.json(response);
        })
    }
}