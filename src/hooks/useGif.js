
import { useEffect, useState } from "react";
import axios from "axios";


//here we take our api from env file
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;



const useGif = (tag) => {
    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState(false);
  
    //   api call
    async function fetchData(tag) {
      setLoading(true);
      const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
      //console.log(data);
      const imageSource = data.data.images.downsized_large.url;
      //console.log(imageSource)
      setGif(imageSource);
      setLoading(false);
    }
  
    useEffect(() => {
      fetchData();
    }, []);

    return{gif, loading, fetchData}
  
}

export default useGif
