import React from 'react';
import { Provider, UpdownButton } from "@lyket/react";
import './Card.css'
const Card =({id,title,category,likes,dislikes})=>{
	
  return (
   <div className='tc  dib br3 pa3 ma2 grow bw2 shadow-5'> 
     <img alt='robots' src={`https://robohash.org/${id}?2000*200`} width='250px'/>
       <div> 
     <h2> {title} </h2>
     <h3> {category} </h3>
    <p> {likes} ===> {dislikes}</p>
    <Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa">
  <UpdownButton
   value='5'
    namespace="my-documentation"
    id="like-dislike-buttons-api"
  />
</Provider>
     <button 

          
       className="bt br4 ph3 pv1  ba black  grow pointer bbc"
       >Supprimer</button>

     

       </div>
   

   </div>

  	)


}

export default Card; 