import React from "react";
//import { useEffect } from "react";
import { useState } from "react";
//import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

//here we take our api from env file
//const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
  const [tag, setTag] = useState("Car");
//   const [gif, setGif] = useState("");
//   const [loading, setLoading] = useState(false);

//   //   api call

//   async function fetchData() {
//     setLoading(true);
//     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
//     const { data } = await axios.get(url);
//     console.log(data);
//     const imageSource = data.data.images.downsized_large.url;

//     //console.log(imageSource)
//     setGif(imageSource);
//     setLoading(false);
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//we use our custom gif
const{gif, loading, fetchData} = useGif(tag);

//   function clickHandler() {
//     fetchData();
//     //console.log("button clixked");
//   }

//   function changeHandler(event) {
//     setTag(event.target.value);
//   }

  return (
    <div
      className="w-1/2 bg-blue-400  rounded-xl border border-black
    flex flex-col items-center gap-y-5 mt-[15px] mb-[20px]"
    >
      <h1 className="text-2xl underline uppercase font-bold mt-[15px]">
        Random {tag} Gif
      </h1>
      { loading ? (
        <Spinner/>
      ) : (
        <img src={gif} alt="randomGif" width="400" className="rounded-md"/>
      )}

        
      <input
        className="w-9/12 text-lg py-2 rounded-lg mb-[20px] text-center"
        onChange={(event)=> setTag(event.target.value)}
        placeholder="Enter a Keyword to search gif"
        value={tag}
      />
      <button
        onClick={() => fetchData(tag)}
        className="w-9/12 bg-white text-lg py-2 rounded-lg mb-[3px] text-center"
        
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
