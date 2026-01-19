import React from 'react'

const ResultCard = ({ elem }) => {
    // id: elem.id,
    // type: "photo",
    // title: elem.alt_description,
    // thumbnail: elem.urls.small,
    // src: elem.urls.full,
    // url: elem.links.html
    return (
        <div className='h-70 w-80 bg-gray-800 relative'>
            {elem.type == "photo" ? <img className='h-full w-full object-cover object-center' src={elem.src} alt="" /> : ""}
            {elem.type == "video" ? <video className="h-full w-full object-cover object-center" autoPlay loop muted src={elem.src}></video> : ""}
            {elem.type == "gif" ? <img className='h-full w-full object-cover' src={elem.src} alt="" /> : ""}

            {/* title */}
            <div className='absolute bottom-0 left-0 w-full bg-black/05 px-2 py-1'>
                <h3 className='text-gray-100 text-md font-semibold font-[poppins]'>
                    {elem.title}
                </h3>
            </div>
        </div>
    )
}

export default ResultCard;