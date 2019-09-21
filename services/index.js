const axios =  require("axios");

const apiUrl = "https://fourtytwowords.herokuapp.com"
const apiKey = "f0ea8dcbbaedd0fcad72e047e6056c6f5b33d76cc262607ad2f86083eb10c7eed7f2d3bba3641db8c1abfd84d6cd5d4630cfe66695c38922c385b54cd56b7debdbf581abcbd46b972ad96b42e3c61470"
const client = axios.create({
  baseURL: apiUrl
})

module.exports = { client, apiKey }