import { fetchGIF, fetchPhotos, fetchVideos } from "./API/mediaAPI";
import ResultGrid from "./Components/ResultGrid";
import Search from "./Components/Search";
import Tabs from "./Components/Tabs";

const App = () => {
  return (
    <div className='h-screen w-full bg-gray-800 text-white px-7 py-5'>
      {/* <button onClick={async ()=>{
        let data = await fetchPhotos("cat");
        console.log(data.results);
      }}>click</button>

      <button onClick={async ()=>{
        let data = await fetchGIF("cat");
        console.log(data);
      }}>click2</button>

      <button onClick={async ()=>{
        let data = await fetchVideos("cat");
        console.log(data.videos);
      }}>click3</button> */}

      <Search/>
      <Tabs/>
      <ResultGrid/>
    </div>
  )
}

export default App;