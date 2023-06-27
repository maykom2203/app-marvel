
const md5 = require('md5')

const privateKey = "6e4ee40d109ad01524443ba3b64e34a0602b7f39";
const publicKey = "9c0fd3f19e344518481770071a9beee8";
// const privateKey = "cc60e04ab2a5ed1c017bda19d066bad129a3c096";
// const publicKey = "3692c651d00a27fd329b82cb0d71a41f";



export const GetApi = async () => {

  const time = Date.now().toString();
  const creatHast = time + privateKey + publicKey;
  const hash = md5(creatHast);
  const ApiKey = `&ts=${time}&apikey=${publicKey}&hash=${hash}`
  const TotalHeroi = 1562;
  const limit = 100;
  const pag = Math.ceil(TotalHeroi / limit)
  const arrayPages: any = [];


  let cont = 0
  for (let i = 1; i <= pag; i++) {
    const url = `http://gateway.marvel.com/v1/public/characters?&limit=${limit}&offset=${cont}&${ApiKey}`
    const response = await fetch(url);
    const database = await response.json();
    cont += 100
    arrayPages.push(database.data.results);
  }

  return arrayPages;
}