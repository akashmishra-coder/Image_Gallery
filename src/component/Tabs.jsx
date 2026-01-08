import React, { use } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

function Tabs() {
  const tabs = ["Images", "Videos", "Gifs"];
  const dispatch = useDispatch();
  const activeTab = useSelector((store) => store.search.activeTab);

  return (
    <div className=" w-full flex justify-center gap-5 py-10">
      {tabs.map((elem, idx) => (
        <button
          key={idx}
          className={`${activeTab === elem ? "bg-blue-500":"bg-gray-500"} px-5 py-3 text-lg  active:scale-95 active:duration-100  transition cursor-pointer rounded-lg `}
          onClick={ () => dispatch(setActiveTab(elem)) }
        >
          {elem}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
