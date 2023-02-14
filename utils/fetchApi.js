import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"



export const fetchApi=async(url)=>{
    const {data} = await axios.get((url),{
         headers: {
    'X-RapidAPI-Key': '6efd61e17dmsh3fb56b4fffac18cp1d0579jsn98fb6b0b8ebe',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }
    });
    return data;
}