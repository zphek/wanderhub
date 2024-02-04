import CryptoJS from 'crypto-js';
import * as dotenv from 'dotenv';
dotenv.config();

const key:string = process.env.KEY || '';

export class crypto{

    public encryptPassword(password:string):string{
        const ciphertext = CryptoJS.AES.encrypt(password, key);

        return ciphertext.toString();
    }

    public decryptPassword(encryptPassword:string){
        const keyWordArray = CryptoJS.enc.Utf8.parse(key);
    
        const bytes = CryptoJS.AES.decrypt(encryptPassword, keyWordArray);
    
        return bytes.toString(CryptoJS.enc.Utf8);
    }
}