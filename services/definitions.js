const  { client, apiKey }  = require('.');
const url ='word';

//gets the definition details of a particular word by making an api call
 getDefinitionsByWordService = (word)=> {
  return new Promise((resolve, reject) => {
    client
      .get(`${url}/${word}/definitions/`,{params : { api_key: apiKey }})
      .then(json => {
          resolve(json.data)
      }).catch(err => {
          reject(err)
      })
  })
}

module.exports = {
    getDefinitionsByWordService
}
