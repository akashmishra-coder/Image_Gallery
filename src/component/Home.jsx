import SearchBar from "../component/SearchBar";
import Tabs from "../component/Tabs";
import ResultGrid from "../component/ResultGrid";
import { useSelector } from "react-redux";

function Home() {
  const {query} = useSelector((store) => store.search);
  return (
    <div className=" w-screen max-h-auto min-h-screen bg-gray-900 text-white">
      <SearchBar />
      {query && <>
      <Tabs />
      <ResultGrid />
      </>}
      
    </div>
  );
}

export default Home;
