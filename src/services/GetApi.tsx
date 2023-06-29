
import md5 from 'md5';
import axios from 'axios';

const privateKey = process.env.REACT_APP_WEATHER_API_KEY;
const publicKey = process.env.REACT_APP_WEATHER_API_KEY_PUBLIC;

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
  const { data } = await axios.get(urlApiAll);
  return data.data.results;
}