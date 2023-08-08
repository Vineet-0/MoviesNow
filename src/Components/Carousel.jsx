import React, { useEffect, useState } from 'react'
// import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const Carousel = ({children: slides}) => {
    const [curr, setCurr] = useState(0);

    function prev(){
        setCurr((curr) => (
            curr === 0 ? slides.length - 1 : curr - 1
        ))
    }

    function next(){
        setCurr((curr) => (
            curr === slides.length-1 ? 0 : curr+1
        ))
    } 

    useEffect(() => {
        const slideInterval = setInterval(next, 5000);
        return () => clearInterval(slideInterval)
    }, [])

  return (
    <div className="overflow-hidden scroll-smooth relative mb-4 mx-[20px] md:mx-16">
        <div 
         className="flex transition-transform ease-out duration-500"
         style={{transform: `translateX(-${curr*100}%)`}}
         >{slides}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-1 md:p-2 lg:p-4">
            <button onClick={prev} className='bg-transparent
             text-white cursor-pointer'>
                <HiChevronLeft
                    className=" text-white text-[30px] md:text-[50px]"
                />
                {/* <AiOutlineLeft size={20}/> */}
            </button>

            <button onClick={next} className='bg-transparent
            hover:b-[0px] text-white cursor-pointer'>
                <HiChevronRight
                    className=" text-white text-[30px] md:text-[50px]"
                />
                {/* <AiOutlineRight size={20}/> */}
            </button>

        </div> 

        <div className='absolute bottom-2 md:bottom-4 right-0 left-0'>
            <div className="flex items-center justify-center gap-3">
                {
                    slides.map((el, i) => (
                        <div
                         className={`
                          transition-all w-1 md:w-2 h-1 md:h-2 bg-white rounded-full
                          ${curr === i ? "p-1 md:p-2" : "opacity-50"}
                         `}
                        />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Carousel