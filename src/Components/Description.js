
import React from 'react'
import{useNavigate,useLocation,Outlet}from 'react-router-dom'

const Description =({movies})=>{

    const location = useLocation()
    const navigate = useNavigate();
    const movie = movies.find(el => location.state.id === el.id)
    return (
        <div className="description">
            <h1>{movie.name}</h1>
             <h2>{movie.Description}</h2>
             <button onClick={()=> navigate(-1)}>go back</button>
             <Outlet/>
        </div>
    )
}

export default Description;
