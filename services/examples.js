const  { client, apiKey }  = require('.');
const url ='word';

//gets the example details of a particular word by making an api call
 getExamplesByWordService =(word)=> {
  return new Promise((resolve, reject) => {
    client
      .get(`${url}/${word}/examples/`,{params : { api_key: apiKey }})
      .then(json => {
          resolve(json.data)
      }).catch(err => {
          reject(err)
      })
  })
}

module.exports = {
    getExamplesByWordService
}
