import React from 'react';
import './cards.css';
function Cards() {
return (
<div class="card-container">
   <h1>Cards</h1>
   <div class="cards">
      <div class="card">
         <div class="card-logo"></div>
         <div class="card-text">
            <span className="title">Nombre</span>
            <span className="subtitle">Paradigm Representative</span>
            <span className='badge'>Badge</span>
         </div>
      </div>
      <div class="card">
         <div class="card-logo"></div>
         <div class="card-text">
            <span className="title">Nombre</span>
            <span className="subtitle">Paradigm Representative</span>
            <span className='badge'>Badge</span>
         </div>
      </div>
      <div class="card">
         <div class="card-logo"></div>
         <div class="card-text">
            <span className="title">Nombre</span>
            <span className="subtitle">Paradigm Representative</span>
            <span className='badge'>Badge</span>
         </div>
      </div>
      <div class="card">
         <div class="card-logo"></div>
         <div class="card-text">
            <span className="title">Nombre</span>
            <span className="subtitle">Paradigm Representative</span>
            <span className='badge'>Badge</span>
         </div>
      </div>
   </div>
</div>
)}
export default Cards;