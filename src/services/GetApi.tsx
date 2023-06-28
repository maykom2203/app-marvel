
import md5 from 'md5';

// const privateKey = "6e4ee40d109ad01524443ba3b64e34a0602b7f39";
// const publicKey = "9c0fd3f19e344518481770071a9beee8";
// const privateKey = "cc60e04ab2a5ed1c017bda19d066bad129a3c096";
// const publicKey = "3692c651d00a27fd329b82cb0d71a41f";
const privateKey = "76d45d64138323d9d9a72fbdfa49c342de0e14e0";
const publicKey = "208eed2ef1c75cedfee6303b4d43cb06";


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
  const urlApiAll = url+key
  const response = await fetch(urlApiAll);
  const database = await response.json();
  return database.data.results;

}