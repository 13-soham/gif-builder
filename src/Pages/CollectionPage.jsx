import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../Components/CollectionCard';
import { useNavigate } from 'react-router-dom';
import { clearCollection } from '../Redux/features/collectionSlice';
import { toast, Bounce } from 'react-toastify';

const CollectionPage = () => {
  let SavedElem = useSelector((state) => state.collection.items);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  function clearEvent() {
    if (SavedElem.length === 0) {
      toast.info('Collection is empty', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
    else {
      dispatch(clearCollection());
      toast.error('Collection Cleared', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  }

  return (
    <div className="min-h-screen w-full bg-gray-800 text-white px-10 py-6 flex flex-col px-4 sm:px-6 md:px-10">

      <div className="flex items-center gap-4 mb-8 flex-col sm:flex-col md:flex-row">
        <button
          onClick={() => navigate(-1)}
          className="px-5 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-xl w-full md:w-auto"
        >
          Back
        </button>

        <button
          onClick={() => {
            clearEvent();
          }}
          className="px-5 py-2 bg-red-900 hover:bg-red-800 rounded-md text-xl w-full md:w-auto"
        >
          All Clear
        </button>

        <h1 className="text-3xl font-bold tracking-wide font-[montserrat] text-center text-gray-200 w-full md:w-auto">
          My Collection
        </h1>
      </div>

      <div className="flex flex-wrap gap-5 justify-center overflow-auto">
        {SavedElem.length === 0 ? (
          <h2 className="text-gray-300 text-center w-full">
            No items saved yet...
          </h2>
        ) : (
          SavedElem.map(elem => (
            <CollectionCard key={elem.id} elem={elem} />
          ))
        )}
      </div>
    </div>
  )
}

export default CollectionPage;