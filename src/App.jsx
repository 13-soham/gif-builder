import { fetchGIF, fetchPhotos, fetchVideos } from "./API/mediaAPI";

const App = () => {
  return (
    <div className='h-screen w-full bg-gray-800 text-white'>
      <button onClick={async ()=>{
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
      }}>click3</button>
    </div>
  )
}

export default App;