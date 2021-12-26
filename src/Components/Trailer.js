import React from 'react'
import {useLocation} from 'react-router-dom'

const Trailer = ({movies}) => {
    const location = useLocation ();
    const movie = movies.find(el => location.state.id == el.id)
    return (
        <div className="trailer">
            <iframe 
            width="727" 
            height="409" 
            src={movie.trailer} 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
            </iframe>
        </div>
    )
}

export default Trailer
