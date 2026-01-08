import CollectionCard from '../component/CollectionCard';
import { useDispatch, useSelector } from 'react-redux';
import { clearCollection, removeAllToast } from '../redux/features/collectionSlice';

function CollectionPage() {

    const collectionData = useSelector(store => store.collection.item);
    const dispatch = useDispatch();

    const clearAllCollection = () => {
        // clear collection logic
        dispatch(clearCollection())
        dispatch(removeAllToast())
    }

  return (
   <div className=' min-h-screen bg-gray-900 text-white'>
    
    {collectionData.length === 0 ? <div className=' h-screen flex justify-center items-center text-3xl font-semibold text-white bg-gray-900'>No items in your collection</div> : <div className=' flex justify-between px-8 items-center py-5 border-b border-gray-700'>
      <h1 className=' text-3xl font-bold text-white bg-gray-900 '>My Collection</h1>
      <button onClick={ clearAllCollection} className=' bg-red-600 px-3 py-2 text-lg cursor-pointer rounded-lg active:scale-95 transition'>Clear Collection</button>
    </div> }
     <div className=' w-full  flex flex-wrap overflow-auto   gap-5 px-5 py-10 '>
      {collectionData.map((item, idx) => (
        <div key={idx}>    

        <CollectionCard item={item} />
      </div>
      ))}
    </div>
   </div>
  )
}

export default CollectionPage