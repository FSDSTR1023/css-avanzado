import React from 'react';
import './cards.css';
function Cards() {
return (
<div className="card-container">
   <h1>Cards</h1>
   <div className="cards">
      <div className="card">
         <div className="card-logo"></div>
         <div className="card-text">
            <span className="title">Nombre</span>
            <span className="subtitle">Paradigm Representative</span>
            <span className='badge'>Badge</span>
         </div>
      </div>
      <div className="card">
         <div className="card-logo"></div>
         <div className="card-text">
            <span className="title">Nombre</span>
            <span className="subtitle">Paradigm Representative</span>
            <span className='badge'>Badge</span>
         </div>
      </div>
      <div className="card">
         <div className="card-logo"></div>
         <div className="card-text">
            <span className="title">Nombre</span>
            <span className="subtitle">Paradigm Representative</span>
            <span className='badge'>Badge</span>
         </div>
      </div>
      <div className="card">
         <div className="card-logo"></div>
         <div className="card-text">
            <span className="title">Nombre</span>
            <span className="subtitle">Paradigm Representative</span>
            <span className='badge'>Badge</span>
         </div>
      </div>
   </div>
</div>
)}
export default Cards;