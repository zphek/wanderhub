import axios from "axios";

export default async function sendReq(url, method = "get", data = null){
    
    let conf = {
        method,
        url
    };

    if(method != "get"){
        conf.data = data;
    }
    
    return await axios(conf);
}