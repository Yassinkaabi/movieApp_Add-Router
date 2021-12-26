import StarRatingComponent from "react-rating-stars-component"
import React from 'react'

const Search = ({setRate}) => {
    return (
        <div className="searchName" >
          <StarRatingComponent 
          name="rate" 
          starCount={5}
          onStarClick={(value)=>setRate(value)}
        />  
        </div>
    )
}
export default Search