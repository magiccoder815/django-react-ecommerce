import React from 'react'

const StarRating=({rating})=> {
    const rounddeRating = Math.round(rating);
  return (
     <div className="flex gap-1 text-sm text-yellow-500">
      {[...Array(5)].map((_,index)=>(
           <span key={index}>
            {index <rounddeRating?  <i className="fa-solid fa-star"></i> :  <i className="fa-regular fa-star"></i>}
           
            </span>
      ))} 
    
    </div>
  )
}

export default StarRating