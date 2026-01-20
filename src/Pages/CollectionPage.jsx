import { useSelector } from 'react-redux'
import CollectionCard from '../Components/CollectionCard';
import { useNavigate } from 'react-router-dom';

const CollectionPage = () => {
  let SavedElem = useSelector((state) => state.collection.items);
  let navigate = useNavigate();
  return (
    <div className="min-h-screen w-full bg-gray-800 text-white px-10 py-6 flex flex-col">

      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => navigate(-1)}
          className="px-5 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-xl"
        >
          Back
        </button>

        <h1 className="text-3xl font-bold tracking-wide font-[montserrat] text-center text-gray-200">
          My Collection
        </h1>
      </div>

      <div className="flex flex-wrap gap-5 justify-center overflow-auto">
        {SavedElem.length === 0 ? (
          <h2 className="text-gray-300">No items saved yet...</h2>
        ) : (
          SavedElem.map(elem => (
            <CollectionCard key={elem.id} elem={elem} />
          ))
        )}
      </div>
    </div>
  )
}

export default CollectionPage