import Tabs from "../Components/Tabs";
import ResultGrid from "../Components/ResultGrid";
import Search from "../Components/Search";
import { useSelector } from 'react-redux';

const HomePage = () => {

  const { query } = useSelector((store) => store.search);

  return (
    <div className="py-3">
      <h1 className="font-bold font-[monument] text-7xl text-white tracking-wide text-center my-3"> <span className="text-orange-500">M</span>e<span className="text-emerald-500">di</span>a <span className="text-pink-500">H</span>ub</h1>
      <Search />

      {query != "" ? <>
        <Tabs />
        <ResultGrid />
      </> : <h1 className="text-center my-50 font-[montserrat] text-4xl">Search Anything...</h1>}
    </div>
  )
}

export default HomePage;