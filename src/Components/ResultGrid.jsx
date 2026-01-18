import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchGIF, fetchPhotos, fetchVideos } from '../API/mediaAPI';
import { setQuery, setActiveTab, setResults, setLoading, setError } from '../Redux/features/searchSlice';

const ResultGrid = () => {
    // Whenever query OR activeTab changes
    // ➡️ I should fetch new results

    const { query, activeTab, results, loading, error } = useSelector((store) => store.search);

    useEffect(() => {
        async function getData() {
            let data;
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
                console.log(data);
            }

            else if (activeTab === "videos") {
                let response = await fetchVideos(query);

                // normalisation
                data = response.videos.map(() => ({
                    id: elem.id,
                    type: "video",
                    title: elem.user.name || 'video',
                    thumbnail: elem.user.name || 'video',
                    src: elem.video_files[0].link,
                    url: elem.url
                }));
                console.log(data);
            }
            else if (activeTab === "GIF") {
                let response = await fetchGIF(query);
                data = response.map(() => ({
                    id: elem.id,
                    type: "GIF",
                    title: elem.title || 'GIF',
                    thumbnail: elem.urls.small,
                    src: elem.urls.full,
                    url: elem.url
                }));
                console.log(data);
            }
        }

        getData();

    }, [query, activeTab]);

    return (
        <div>result</div>
    )
}

export default ResultGrid;