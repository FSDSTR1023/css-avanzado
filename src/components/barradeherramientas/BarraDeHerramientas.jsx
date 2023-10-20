import React from 'react';
import './barradeherramientas.css';
function BarraDeHerramientas() {
return (
<div className="bar-container">
   <h1>Barra de herramientas</h1>
   <div className='bar-module'>
      <div className='searchbar'>🔍</div>
      <div className='separator'></div>
      <div className='bar-list-module'>
         <div className='bar-list-container'>
            <div className='bar-list'>
               <div className='bar-image'></div>
               <div className='text-container'>
                  <div className='bar-title'>Page</div>
                  <div>Add a new page here</div>
               </div>
            </div>
            <div className='bar-list'>
               <div className='bar-image green'></div>
               <div className='text-container'>
                  <div className='bar-title'>Board</div>
                  <div>Add a kanban here</div>
               </div>
            </div>
            <div className='bar-list'>
               <div className='bar-image blue'></div>
               <div className='text-container'>
                  <div className='bar-title'>Calendar</div>
                  <div>Add a new calendar here</div>
               </div>
            </div>
            <div className='bar-list'>
               <div className='bar-image pink'></div>
               <div className='text-container'>
                  <div className='bar-title'>Table</div>
                  <div>Add a new table here</div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
)}
export default BarraDeHerramientas;