import React,{Component} from 'react';
import movies from './CardList/movies';
import Searchbox from './CardList/Searchbox';
import Cardlist from './CardList/Cardlist'

class MyCard extends Component{


  constructor(){
  	 super()
  	 this.state={
  	 	movies:movies,
  	 	searchfield:''
  	 }
  }


   onSearchchange=(event)=>{
   	  this.setState({searchfield:event.target.value})
   	  
   }




  render(){
    const filterMovies=this.state.movies.filter(movie=>{
		return movie.category.toLowerCase().includes(this.state.searchfield.toLowerCase())
	})
  

   return(

   <div className='tc'>
   	
   <Searchbox searchchange={this.onSearchchange} movies={this.state.movies}/>
    <Cardlist movies={filterMovies}/>

   </div>


   	);


  }




}


export default MyCard;