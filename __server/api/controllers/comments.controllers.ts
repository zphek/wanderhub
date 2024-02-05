import services from "../services/comment.services";
import jwt from "jsonwebtoken";

const {createComment, getComment}:services = new services;

export default class controllers{
    public createComment(req:any, res:any){
        let {description, ID_DISCUSSION} = req.body;
        const token = req.get("authorization");

        jwt.verify(token, "20040915", (err:any, decoded:any)=>{
            createComment(description, decoded.ID_USER, ID_DISCUSSION)
            .then(response=>{
                res.json(response)
            })
        })
    }

    public getComments(req:any, res:any){
        let {id} = req.params;

        getComment(id)
        .then(response=>{
            res.json(response);
        })
    }
}