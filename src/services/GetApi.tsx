const md5 = require('md5')

const privateKey = "6e4ee40d109ad01524443ba3b64e34a0602b7f39";
const publicKey = "9c0fd3f19e344518481770071a9beee8";
const maxCharacters = 800;



export const GetApi = async () => {
    const time = Date.now().toString();
    const creatHast = time + privateKey + publicKey;
    const hash = md5(creatHast);
    // const offset = Math.floor((Math.random() * maxCharacters) + 1);
    const url = `http://gateway.marvel.com/v1/public/characters?limit=100&offset=${maxCharacters}&ts=${time}&apikey=${publicKey}&hash=${hash}`
   
    const response = await fetch(url);
    const database = await response.json();
    return database.data.results;
  };


