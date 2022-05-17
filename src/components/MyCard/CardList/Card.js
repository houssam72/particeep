import React from 'react';
import LikeDislike from './LikeDislike';
import './Card.css'

class Card extends React.Component {
	 
   render(){

  return (
   <div className='tc  dib br3 pa3 ma2  bw2 shadow-5'> 
     <img alt='robots' src={`https://robohash.org/${this.props.id}?2000*200`} width='250px'/>
       <div> 
     <h2> {this.props.title} </h2>
     <h3> {this.props.category} </h3>
    
    
   <LikeDislike like={this.props.likes} dislikes={this.props.dislikes} />
           
   
     <button 

       onClick={this.props.handleDelete}    
       className="bt br4 ph3 pv1  ba black  grow pointer bbc bt"
       >Supprimer</button>

     

       </div>
   

   </div>

  	)

}
}

export default Card; 