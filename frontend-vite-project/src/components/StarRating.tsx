import React from 'react'

const StarRating=({rating})=> {
    const rounddeRating = Math.round(rating);
  return (
     <div class="flex gap-1 text-sm text-yellow-500">
      {[...Array(5)].map((_,index)=>(
           <span key={index}>
            {index <rounddeRating?  <i class="fa-solid fa-star"></i> :  <i class="fa-regular fa-star"></i>}
           
            </span>
      ))} 
    
    </div>
  )
}

export default StarRating