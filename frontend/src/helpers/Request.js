
class Request{

 get(url){
   return fetch(url)
   .then(res => res.json());
 }

 post(url, payload){
   return fetch(url, {
     method: 'POST',
     headers: {'content-type': 'application/json'},
     body: JSON.stringify(payload)
   })
 }


}



export default Request;
