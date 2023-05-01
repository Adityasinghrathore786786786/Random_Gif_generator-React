import React, { useEffect, useState } from "react";
import axios from "axios";

//here we take our api from env file
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  const [gif, setGif] = useState('');

  //   api call

  async function fetchData() {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const {data} = await axios.get(url);
    // console.log(data)
    const imageSource = data.data.images.downsized_large.url;

    //console.log(imageSource)
    setGif(imageSource);
  }

  useEffect( () => {
    fetchData();
  },[] );

  function clickHandler() {
    fetchData();
    console.log("button clixked");
  }

  return (
    <div
      className="w-1/2 bg-green-400  rounded-xl border border-black
    flex flex-col items-center gap-y-5 mt-[15px]"
    >
      <h1 className="text-2xl underline uppercase font-bold mt-[15px]">A Random Gif</h1>

      <img src={gif} alt="randomGif" width="450" />

      <button
        onClick={clickHandler}
        className="w-9/12 bg-white text-lg py-2 rounded-lg mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
