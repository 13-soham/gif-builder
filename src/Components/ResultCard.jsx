import React from 'react'

const ResultCard = ({ elem }) => {
    
    function saveEvent(elem){
        // localStorage.clear();
        let oldData = JSON.parse(localStorage.getItem("collection")) || [];
        let newData = [...oldData, elem];
        console.log(newData);
        localStorage.setItem("collection", JSON.stringify(newData));
    }
    return (
        <div className='h-70 w-80 bg-gray-800 rounded-xl overflow-hidden relative'>
            <a target='_blank' className='h-full' href={elem.url}>
                {elem.type == "photo" ? <img className='h-full w-full object-cover object-center' src={elem.src} alt="" /> : ""}
                {elem.type == "video" ? <video className="h-full w-full object-cover object-center" autoPlay loop muted src={elem.src}></video> : ""}
                {elem.type == "gif" ? <img className='h-full w-full object-cover' src={elem.src} alt="" /> : ""}
            </a>

            {/* title */}
            <div className='absolute bottom-1 left-0 w-full bg-black/05 px-5 py-1 flex items-center justify-between gap-3'>
                <h3 className='text-gray-100 text-md font-semibold font-[poppins] w-2/3'>
                    {elem.title.split(" ").slice(0, 5).join(" ")}
                </h3>
                <button onClick={()=>{
                    saveEvent(elem);
                }} className='px-4 py-2 bg-blue-800 text-white rounded-md cursor-pointer'>save</button>
            </div>
        </div>
    )
}

export default ResultCard;