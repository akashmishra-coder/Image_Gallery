import React from 'react'
import { useDispatch } from 'react-redux';
import { removeToast, removeCollection } from '../redux/features/collectionSlice';

function CollectionCard({item}) {
   const {type, src, title} = item;
    const dispatch = useDispatch();

    const removefromCollection = (item) => {
        dispatch(removeCollection(item));
        dispatch(removeToast());
    }
    
  return (
    <div className=" w-57 h-60 m-2 rounded-t-xl shadow-lg relative overflow-hidden">
        <a href={item.url} target="_blank" rel="noopener noreferrer">
            {type === "image" && <img src={src} alt={title} className=" w-full h-full object-cover object-center rounded-lg" />}
            {type === "video" && <video autoPlay muted loop src={src} className=" w-full h-full object-cover object-center rounded-lg" controls />}
            {type === "gif" && <img src={src} alt={title} className=" w-full h-full object-cover object-center rounded-lg" />}
        </a>
        <div className='  w-full px-2 py-5  absolute bottom-0 bg-linear-to-t from-black to-transparent'>
            <h2 className=" text-md capitalize font-semibold w-[70%]">{title.substring(0, 20)}</h2>
            {/* <h2 className=" text-md capitalize h-12 overflow-hidden font-semibold w-[70%]">{title}</h2> */}
            <button className=' absolute bottom-2 right-2 active:scale-95 bg-blue-800 text-white px-3 py-1  cursor-pointer font-medium rounded-sm' onClick={()=> removefromCollection(item)}>remove</button>
        </div>
    </div>
  )
}

export default CollectionCard