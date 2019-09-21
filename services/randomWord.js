const  { client, apiKey }  = require('.');
const url ='words';

//gets the details of a random word by making an api call
 getRandomWordService =()=> {
  return new Promise((resolve, reject) => {
    client
      .get(`${url}/randomWord`,{params : { api_key: apiKey }})
      .then(json => {
          resolve(json.data)
      }).catch(err => {
          reject(err)
      })
  })
}

module.exports = {
    getRandomWordService
}
