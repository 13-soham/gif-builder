import { useDispatch, useSelector } from 'react-redux';
import { addCollection, addToast, infoToast } from '../Redux/features/collectionSlice';

const ResultCard = ({ elem }) => {

    const items = useSelector((state)=>state.collection.items);
    let dispatch = useDispatch();

    function saveEvent(elem) {
        const alreadyExist = items.find((e) => {
            return e.id === elem.id;
        });

        if (alreadyExist) {
            dispatch(infoToast(elem));
        }
        else {
            dispatch(addCollection(elem));
            dispatch(addToast())
        }
    }
    return (
        <div className='h-70 w-80 bg-gray-800 rounded-xl overflow-hidden relative'>

            <a target='_blank' className='h-full' href={elem.url}>
                
                {elem.type == "photo" ? <img loading='lazy' className='h-full w-full object-cover object-center' src={elem.src} alt={elem.title || "image"} /> : ""}

                {elem.type == "video" ? <video preload='none' className="h-full w-full object-cover object-center" autoPlay loop muted src={elem.src}></video> : ""}

                {elem.type == "gif" ? <img loading='lazy' className='h-full w-full object-cover' src={elem.src} alt={elem.title || "image"} /> : ""}
            </a>

            <div className='absolute bottom-1 left-0 w-full bg-black/05 px-5 py-1 flex items-center justify-between gap-3'>
                <h3 className='text-gray-100 text-md font-semibold font-[poppins] w-2/3'>
                    {elem.title.split(" ").slice(0, 5).join(" ")}
                </h3>
                <button onClick={() => {
                    saveEvent(elem);
                }} className='px-4 py-2 bg-blue-800 hover:bg-blue-700 text-white rounded-md cursor-pointer'>save</button>
            </div>
        </div>
    )
}

export default ResultCard;