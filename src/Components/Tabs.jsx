import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../Redux/features/searchSlice';

const Tabs = () => {
    // 3 tabs for photos, videos and GIFs
    const arr = ["photos", "videos", "GIF"];
    const dispatch = useDispatch();
    const activetab = useSelector((state)=> state.search.activeTab);
  return (
    <div className='flex items-center justify-center gap-5'>
        {arr.map((elem, idx)=>{
            return(
                <button onClick={()=>{
                    dispatch(setActiveTab(elem))
                }} key={idx} className={`${activetab == elem ? "bg-indigo-700" : "bg-gray-600"} px-5 py-3 text-white active:scale-95 transition rounded-md`}>{elem}</button>
            )
        })}
    </div>
  )
}

export default Tabs;