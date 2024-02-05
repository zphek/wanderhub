//import CryptoJS from 'crypto-js';
import * as dotenv from 'dotenv';
import bcript from "bcrypt";
dotenv.config();

const key:number = 13;

export class crypto{
    public async encryptPassword(password:string) {
        let response:string = await bcript.hash(password, key);
        return response;
    }

    public async comparePassword(password:string, encryptPassword:string){
        return await bcript.compare(password, encryptPassword);
    }
}