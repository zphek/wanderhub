import jwt from "jsonwebtoken";

export default function verifyJWT(req:any, res:any, next:any):void {
    const token = req.get("authorization");

    if(!token){
        res.json({
            message: "You need to authentificate."
        });
    } else {
      jwt.verify(token, '20040915', (err:any, decoded:any)=>{
          if(err){
            res.json(err);
          } else {
            req.userId = decoded.id;
            next();
          }
      });
    }
}