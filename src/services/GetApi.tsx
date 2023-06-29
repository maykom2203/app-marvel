
import md5 from 'md5';

const privateKey = "6e4ee40d109ad01524443ba3b64e34a0602b7f39";
const publicKey = "9c0fd3f19e344518481770071a9beee8";

export const url = `http://gateway.marvel.com/v1/public/characters?limit=40`

export const ApiKey = () => {
  const time = Date.now().toString();
  const creatHast = time + privateKey + publicKey;
  const hash = md5(creatHast);
  const ApiKey = `&ts=${time}&apikey=${publicKey}&hash=${hash}`
  return ApiKey;

}


export const GetApiAll = async () => {
  const key = ApiKey();
  const urlApiAll = url + key
  const response = await fetch(urlApiAll);
  const database = await response.json();
  return database.data.results;

}