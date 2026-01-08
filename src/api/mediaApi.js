import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_API;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_API;
const TENOR_KEY = import.meta.env.VITE_TENOR_API;

export async function fetchUnplashPicture(query, page=1, per_page=20) {
    const res = await axios.get("https://api.unsplash.com/search/photos",{
        params: {query, page, per_page},
        headers: {Authorization: `Client-ID ${UNSPLASH_KEY}`},
    })

    const data = res.data.results.map((item) => ({
        id: item.id,
        type: "image",
        src: item.urls.full,
        title: item.alt_description,
        thumbnail: item.urls.small,
        url: item.links.html,
    }));   

    return data;
}

export async function fetchPexelsVideos(query, per_page=20) {
    const res = await axios.get("https://api.pexels.com/videos/search",{
        params: {query, per_page},
        headers: {Authorization: PEXELS_KEY},
    })

   const data = res.data.videos.map((item) => ({
        id: item.id,
        type: "video",
        title: item.user.name || "videos",
        thumbnail: item.image,
        src: item.video_files[0].link,
        url: item.url,
    }));   

    return data;
}

export async function fetchTenorGif(query) {
        const res = await axios.get("https://tenor.googleapis.com/v2/search",{
            params: {q:query, key:TENOR_KEY, limit:20},
    })
   const data = res.data.results.map((item) => ({
        id: item.id,
        type: "gif",
        title: item.title || "GIF",
        thumbnail: item.media_formats.tinygif.url,
        src: item.media_formats.gif.url,
        url: item.url,
    }));   

    return data;
}