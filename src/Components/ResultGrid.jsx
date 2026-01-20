import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchGIF, fetchPhotos, fetchVideos } from '../API/mediaAPI';
import { setResults, setLoading, setError } from '../Redux/features/searchSlice';
import ResultCard from './ResultCard';
import Loading from './Loading';

const ResultGrid = () => {
    // Whenever query OR activeTab changes
    // ➡️ I should fetch new results

    const { query, activeTab, results, loading, error } = useSelector((store) => store.search);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!query) return;
        async function getData() {
            try {
                dispatch(setLoading());    // on actions.payload it is true now
                let data = [];
                if (activeTab === "photos") {
                    let response = await fetchPhotos(query);

                    // normalisation
                    data = response.results.map((elem) => ({
                        id: elem.id,
                        type: "photo",
                        title: elem.alt_description,
                        thumbnail: elem.urls.small,
                        src: elem.urls.full,
                        url: elem.links.html
                    }));
                    // console.log(data);
                }

                else if (activeTab === "videos") {
                    let response = await fetchVideos(query);

                    // normalisation
                    data = response.videos.map((elem) => ({
                        id: elem.id,
                        type: "video",
                        title: elem.user.name || "video",
                        thumbnail: elem.user.name || "video",
                        src: elem.video_files[0].link,
                        url: elem.url
                    }));
                    // console.log(data);
                }

                else if (activeTab === "GIF") {
                    let response = await fetchGIF(query);

                    // normalization
                    data = response.map((elem) => ({
                        id: elem.id,
                        type: "gif",
                        title: elem.title || "GIF",
                        thumbnail: elem.images.fixed_width_small.url,
                        src: elem.images.original.url,
                        url: elem.url
                    }));

                    // console.log(data);
                }

                dispatch(setResults(data));
            }
            catch (err) {
                dispatch(setError(err.message));
            }
        }

        getData();

    }, [query, activeTab, dispatch]);


    if (error) return <h1>Error</h1>
    if (loading) return <Loading/>

    return (
        <div className='h-full w-full py-10 flex flex-wrap items-center justify-center gap-10 overflow-auto'>
            {results.map((elem) => {
                return(
                    <div key={elem.id}>
                        <ResultCard elem={elem}/>
                    </div>
                )
            })}
        </div>
    )
}

export default ResultGrid;