import axios from "axios"

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;


export async function fetchPhotos(query, page = 1, per_page = 20) {
    try {
        const res = await axios.get("https://api.unsplash.com/search/photos", {
            params: {
                query,
                page,
                per_page,
            },
            headers: {
                Authorization: `Client-ID ${UNSPLASH_KEY}`
            }
        });

        return res.data;
    }
    catch (err) {
        console.warn(err.message);
    }
}

export async function fetchGIF(query, limit = 10) {
  const res = await axios.get(
    "https://api.giphy.com/v1/gifs/search",
    {
      params: {
        api_key: GIPHY_KEY,
        q: query,
        limit,
      },
    }
  );

  return res.data.data;
}

export async function fetchVideos(query, page = 1, per_page = 15) {
    try {
        const res = await axios.get("https://api.pexels.com/videos/search", {
            params: {
                query,
                page,
                per_page
            },
            headers: {
                Authorization: `Client-ID ${PEXELS_KEY}`
            }
        })

        return res.data;
    }
    catch(err){
        console.warn(err.message);
    }
}