import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from "../Redux/features/searchSlice";
import { NavLink } from 'react-router-dom';

const Search = () => {
    // What should a search bar do?
    //     Show an input box 📝
    //     User types something
    //     Input(local state: searching)
    //    ↓ (on submit)
    //   dispatch(setQuery(searching))
    //    ↓
    //  Redux state updates

    const dispatch = useDispatch();
    // const query = useSelector((state)=> state.search.query);
    const [searching, setSearching] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(setQuery(searching));
        setSearching("");
    }
    return (
        <div className='px-10 py-5 sticky top-0 bg-gray-800 z-50 flex gap-2'>
            <form onSubmit={(e) => {
                handleSubmit(e)
            }} className='w-full flex gap-3'>
                <input value={searching} required onChange={(e) => {
                    setSearching(e.target.value);
                }} className='w-full px-3 py-2 text-xl bg-gray-900 outline-none border-2 rounded-md border-indigo-500 text-white' type="text" placeholder='search' />
                <button className='px-5 py-3 bg-purple-900 text-white text-xl rounded-md cursor-pointer active:scale-95 transition duration-150'>Go</button>
            </form>
            <NavLink to="/collection" className='px-5 py-3 bg-emerald-700 text-white text-xl rounded-md cursor-pointer active:scale-95 transition duration-150'>Collection</NavLink>
        </div>
    )
}

export default Search;