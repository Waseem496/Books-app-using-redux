import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import './Viewscreen.css'

function Viewscreen() {
    const data = useSelector(state => state);
    console.log(data);
  return (
    <div>
    <div className="viewscreen">
      {data.bookData.map(item => (
        <div >
          <div className="book-card" key={item.bookId}>
            <div className="title">
              <h1>{item.title}</h1>
            </div>
            <div className="author">
              <h2>{item.author}</h2>
            </div>
            <div className="genre">
              <h3>{item.genre}</h3>
            </div>
            <div className="price">
              <h4>Price: {item.price}</h4>
            </div>
          </div>
        </div>
      ))}


      
        
    </div>
          <Link to="/"> 
          <button className="back-button">Back</button>
        </Link>
        </div>
  )
}

export default Viewscreen