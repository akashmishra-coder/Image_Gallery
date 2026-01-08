import { useDispatch, useSelector } from "react-redux";
import {
  setQuery,
  setLoading,
  setError,
  setResults,
  clearResults,
} from "../redux/features/searchSlice";
import {
  fetchPexelsVideos,
  fetchTenorGif,
  fetchUnplashPicture,
} from "../api/mediaApi";
import { useEffect } from "react";
import ResultCard from "./ResultCard";

function ResultGrid() {
  const dispatch = useDispatch();
  const { query, results, activeTab, loading, error } = useSelector(
    (store) => store.search
  );

  useEffect(() => {

    dispatch(setLoading());
    if (!query) return;
    let data = [];

    const fetchdata = async () => {
      try {
        if (activeTab === "Images") {
          data = await fetchUnplashPicture(query);
          console.log(data);
        }
        if (activeTab === "Videos") {
          data = await fetchPexelsVideos(query);
          console.log(data);
        }
        if (activeTab === "Gifs") {
          data = await fetchTenorGif(query);
          console.log(data);
        }
        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err.message));
      }
    };

    // return () => {
    //   dispatch(clearResults());
    // };

    fetchdata();
  }, [query, activeTab ,dispatch]);


if (error) return <div className=" text-center text-2xl ">Error</div>;
if (loading) return <div className=" text-center text-2xl ">Loading...</div>;

return (
  <div className=" flex flex-wrap overflow-auto justify-center gap-5 px-5 pb-10 ">
    {results.map((item, idx) => {
      return <div key={idx}>        

        <ResultCard item={item} />
      </div>;
    })}
  </div>
);
}
export default ResultGrid;
