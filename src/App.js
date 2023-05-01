import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return(
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
      <h1 className="bg-white rounded-lg w-11/12
       text-center mt-[20px] py-2 px-10 text-3xl font-bold
      ">RANDOM GIFS</h1>
      <div className="flex flex-col">
        <Random/>
        <Tag/>
      </div>
    </div>
  ) ;
}
