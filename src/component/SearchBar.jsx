import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setQuery } from '../redux/features/searchSlice';

function SearchBar() {
    const [text, setText] = useState("");

    const dispatch = useDispatch();

    const sumbmitHandler = (e) => {
        e.preventDefault();

        dispatch(setQuery(text));

        setText("");
    }
  return (
    <div className=' w-full h-25 flex gap-5 justify-center bg-gray-800 '>
        <form action="" onSubmit={(e) => sumbmitHandler(e)} className=' flex items-center gap-4 text-xl'>
            <input 
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
            className=' pl-3 pr-8 py-4 border-2 border-white rounded-xl outline-none mt-4'
            type="text" 
            placeholder='Search anything...' />
            <button className=' cursor-pointer px-8 py-4 border-2 border-white rounded-xl outline-none mt-4 active:scale-95 active:duration-100'>Click</button>
        </form>
    </div>
  )
}

export default SearchBar