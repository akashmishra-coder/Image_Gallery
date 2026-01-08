import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className=' flex justify-between px-10 items-center font-medium py-5 bg-(--c1) text-(--c1) h-16 shadow-md '>
        <div className=' text-4xl text-white'>Media search</div>
        <div className=' flex gap-5'>
            <Link to='/' className=' rounded active:scale-95 transition text-base  px-4 py-2 bg-(--c4) ' >Search</Link>
            <Link to='/collection' className=' rounded active:scale-95 transition text-base  px-4 py-2 bg-(--c4) ' >Collection</Link>
        </div>
    </div>
  )
}

export default Navbar