import './App.css';
import React from 'react';
import {v4 as uuidv4} from 'uuid'
import Movielist from './Components/Movielist.js'
import Search from './Components/Search'
import {useState} from 'react'
import {Routes,Route} from 'react-router-dom'
import Description from './Components/Description';
import Trailer from './Components/Trailer';

function App() {

  const [movies,setMovies] = useState([
    {
      
      id :uuidv4(),
      name:"Pirates of the Caribbean",
      Description: "Pirates of the Caribbean is a series of fantasy swashbuckler films produced by Jerry Bruckheimer and based on Walt Disney's theme park attraction of the same name. The film series serves as a major component of the eponymous media franchise.",
      image:"https://i.egycdn.com/pic/WmFwZndlY21UbW1UYm1tdmNtbUVjY052bWRmd3h4bA.jpg",
      rating :5,
      year:"2003",
      trailer:"https://www.youtube.com/watch?v=Hgeu5rhoxxY"

    },
    {
      id :uuidv4(),
      name:"War for the Planet of the Apes",
      Description: "Caesar and his apes are forced into a deadly conflict with an army of humans led by a ruthless Colonel. After the apes suffer unimaginable losses, Caesar wrestles with his darker instincts and begins his own mythic quest to avenge his kind.",
      image:"https://i.egycdn.com/pic/WmFwZndlY3ZOam1qdmN2Y21tRWNhdk54anZObW1qbXo.jpg",
      rating :4,
      year:"2017",
      trailer:"https://www.youtube.com/watch?v=qxjPjPzQ1iU"
    },
    {
      id :uuidv4(),
      name:"Spider-Man: No Way Home",
      Description: "After Peter Parker is accused of killing Mastrio and sowing chaos in the city, he turns to Doctor Strange in an attempt to erase what happened and restore the secrecy of his identity, during which Parker finds himself facing off against enemies from other worlds.",
      image:"https://i.egycdn.com/pic/WmFwZndlY21tbWJtbXZOam1vUmN2Y2FtSWx3VEV2dGM.jpg",
      rating :5,
      year:"2021",
      trailer:"https://www.youtube.com/watch?v=JfVOs4VSpmA"
    },
    {
      id :uuidv4(),
      name:"مدرسة المشاغبين بالألوان",
      Description: "المسرحية من بطولة عادل إمام وسعيد صالح وهادي الجيار وأحمد زكي ويونس شلبي وحسن مصطفى وسهير البابلي وعبد الله فرغلي، ومن تأليف علي سالم، وإخراج جلال الشرقاوي.",
      image:"https://i.egycdn.com/pic/WmFwZndlY21IY21vTnBwdkVjUG1wbXdUVEd3YQ.jpg",
      rating :4,
      year:"1973",
      trailer:"https://www.youtube.com/watch?v=jA2It2Cf2Uw"
    },
    {
      id :uuidv4(),
      name:"Blade ",
      Description: "The film revolves around Blade, whose mother was killed by a vampire while he was still a child, and when he reached his maturity, he takes revenge on the vampires.",
      image:"https://i.egycdn.com/pic/WmFwZndlY21ZRW1FbWJtdm1qbWJFY2F2d3h4YXhtTGM.jpg",
      rating :4,
      year:"1998",
      trailer:"https://www.youtube.com/watch?v=kaU2A7KyOu4"
    },
    {
      id :uuidv4(),
      name:"Venom: Let There Be Carnage ",
      Description: "Eddie Brock/Venom (Tom Hardy) is one of the most mysterious, complex and evil Marvel characters, as well as the archenemy of Spider-Man. Venom was a completely ordinary person, until he was possessed by an alien being who gave him unprecedented superpowers; From this moment on, everything related to his life changed, and he and the alien became one and indivisible entity.",
      image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6486/6486493_so.jpg",
      rating :4,
      year:"2021",
      trailer:"https://www.youtube.com/watch?v=NmzuHjWmXOc"
    },
    ]);

    const [movie, setMovie] = useState({
      name: "",
      Description:"",
      image: "",
      rating: "",
      year: "",
    });

  const[searchTerm,setsearchTerm]=useState('')
  const [rate, setRate] = useState(1)
  
  const handleChange = (e) =>{
    setMovie({...movie, [e.target.name]: e.target.value})
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    setMovies([...movies, {id:uuidv4(),...movie}])
    setMovie('')
      };
    
      const handlonchange = (e)=>{
        setsearchTerm(e.target.value);
      }
 
  return (
   
    <div className="App">
    <h1 className='head'> Movie app</h1>
    <Search setRate={setRate} />
    <div className='search_movies'>
    <input className='search' type='text' placeholder="search..." onChange={handlonchange}/> 
    </div>

    <Movielist movies={movies.filter(el=>el.name.toLowerCase().includes(searchTerm.toLowerCase())&& el.rating >= rate)}/>
    

    <Routes>
        <Route exact path='/Description/:description' element={<Description movies={movies}/>}>
        <Route path='' element={<Trailer movies={movies}/>}/>
        </Route>
        <Route path='/' element={<Movielist handleChange={handleChange} handleSubmit={handleSubmit} movies={movies}/>}></Route>
    </Routes>

      <div className="add_Movies">
    <input type="text" placeholder="name" name="name"  onChange={ handleChange}></input>
    <input type="text" placeholder="description" name="description"  onChange={ handleChange}></input>
    <input type="text" placeholder="rating" name="rating" onChange={ handleChange}></input>
    <input type="text" placeholder="year" name="year" onChange={ handleChange}></input>
    <input type="file"  placeholder="image" name="image" onChange={ handleChange} ></input>

    <button type="submit" onClick={handleSubmit}>Add</button>
   </div> 

  </div>
);
}
export default App;