import jwt, { JsonWebTokenError } from "jsonwebtoken";
import services from "../services/post.services";
const {createPost, deletePost, getPosts, getPostsByUser}:services = new services;

export default class controllers{
    public createPost(req:any, res:any){
        const token = req.get("authorization");
        let {CAPTION} = req.body;

        jwt.verify(token, "20040915", (err:any, decoded:any)=>{
            createPost(CAPTION, decoded.ID_USER)
            .then((response)=>{
                if(!response){
                    res.json({
                        errorMsg: "No se pudo crear el post.",
                        error: true
                    });
                    return;
                }

                res.json(response);
            });
        });
    }

    public deletePost(req:any, res:any){
        const token = req.get("authorization");
        const {ID_POST} = req.body;

        jwt.verify(token, "20040915", (err:any, decoded:any)=>{
            deletePost(ID_POST, decoded.ID_USER)
            .then(response=>{
                if(!response){
                    res.json(response)
                    return;
                }

                const {data}:any = response;

                res.json(data);
            });
        });
    }

    public getPosts(req:any, res:any){
        getPosts()
        .then(response=>{
            if(!response){
                res.json(response)
                return;
            }

            console.log(response);

            res.json(response);
        })
        .catch(err=>{
            res.json(err);
        })
    }

    public getPostsByUser(req:any, res:any){
        const {username} = req.params;
        
        getPostsByUser(username)
        .then(response=>{
            res.json(response);
        })
    }
}