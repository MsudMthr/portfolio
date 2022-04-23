import axios from "axios";

const BASE_URL = "https://shazam.p.rapidapi.com/search";

export const fetchData = async (query) => {
  const { data } = await axios.get(BASE_URL, {
    params: { term: query, locale: "", offset: "0", limit: "1" },
    headers: {
      "X-RapidAPI-Host": "shazam.p.rapidapi.com",
      "X-RapidAPI-Key": "014876d393msh5001f0f54727a8bp1e8e55jsnc6ef1d95f6c8",
    },
  });
  return data
};
