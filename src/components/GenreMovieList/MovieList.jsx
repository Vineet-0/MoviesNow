import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../../Services/GlobalApi'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

import MovieCard from '../Cards/MovieCard.jsx';
import HrMovieCard from '../Cards/HrMovieCard.jsx';

function MovieList({genreId,index_}) {
    const [movieList,setMovieList]=useState([])
    const elementRef=useRef(null);
    useEffect(()=>{
        getMovieByGenreId();
    },[])

    const getMovieByGenreId=()=>{
        GlobalApi.getMovieByGenreId(genreId).then(resp=>{
            setMovieList(resp.data.results)
        })
    }

    const slideLeft=(element)=>{
        element.scrollLeft-=500;
    }
    const slideRight=(element)=>{
        element.scrollLeft+=500;
    }

  return (
    <div className='relative'>
        <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} 
            className={`text-[50px] text-white
            p-2 z-10 cursor-pointer 
            hidden md:block absolute
            ${index_%3==1?'mt-[70px]':'mt-[140px]'} `}/>
   
        <div ref={elementRef} className='flex overflow-x-auto gap-8
        scrollbar-none scroll-smooth pt-4 px-3 pb-4'>
            {movieList.map((item)=>(
            <a key={item?.id} href={`/movie/${item?.id}`}>
                {index_%3==1?<HrMovieCard key={item.id} movie={item}/>:<MovieCard key={item.id}  movie={item} />}
            </a> 
            ))}
        </div>
        
        <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)}
            className={`text-[50px] text-white hidden md:block
            p-2 cursor-pointer z-10 top-0 absolute right-0 
            ${index_%3==1?'mt-[70px]':'mt-[140px]'}`}/> 
    </div>
  )
}

export default MovieList