import axios from "axios";


export function dictionaryapi(word){
    return new Promise((resolve, reject) => {
        axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/'+word).then(res=>{
            if(res && res.data && res.data.length>0){
                resolve(res.data)
            }
        }).catch((error)=>{
            return reject(error);
        })
    })
}