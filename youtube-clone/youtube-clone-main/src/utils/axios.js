import axios from "axios";
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  method: 'GET',
  url: BASE_URL,
  params: {
    maxResults: '50',
    order: 'date'
  },
  headers: {
    'X-RapidAPI-Key': '8c2b928097msh05dfd4f96511508p1823cajsnc311a6f37804',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


export const fetchFromURL = async (url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
}