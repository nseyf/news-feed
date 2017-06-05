import axios from 'axios';

const API_KEY = 'ebc11401260840e98f862b076bb17dbc';
const ROOT_URL = 'https://newsapi.org/v1/articles?source='
const SOURCE_URL = 'https://newsapi.org/v1/sources?language=en&country=us';

export const FETCH_NEWS = "FETCH_NEWS";

export function fetchNews(newsSource){
  const url = `${ROOT_URL}${newsSource}&apiKey=${API_KEY}`;
  const request = axios.get(url).catch(err => console.log(err));
  return {
    type: FETCH_NEWS,
    payload: request
  }
}

export const FETCH_SOURCES = "FETCH_SOURCES";

export function fetchSources(){
  const request = axios.get(SOURCE_URL);
  return {
    type: FETCH_SOURCES,
    payload: request
  }
}
