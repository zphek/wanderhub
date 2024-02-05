import axios from "axios";

export default async function sendReq(url, method = "get", data = null, token = ""){
    
    let conf = {
        method,
        url,
        headers:{
            "Authorization": token,
            "Content-Type": "application/json"
        }
    };

    if(method != "get"){
        conf.data = data;
    }
    
    return await axios(conf);
}