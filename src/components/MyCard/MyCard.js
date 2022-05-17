import React,{Component} from 'react';
import movies from './CardList/movies';
import Searchbox from './CardList/Searchbox';
import Cardlist from './CardList/Cardlist'

class MyCard extends Component{


  constructor(){
  	 super()
  	 this.state={
  	 	movies:movies,
  	 	searchfield:'',
      searchTrueFalse:1,
      deleted:[]


  	 }
  }


   onSearchchange=(event)=>{
   	  this.setState({searchfield:event.target.value})
   	  if(event.target.value===''){
        this.setState({searchTrueFalse:1})
      }
      else{
        this.setState({searchTrueFalse:0})
      }
   }


    
    handleDelete=(itemToDelete)=>{
      console.log(itemToDelete);
      let newMovies=this.state.movies.filter((movie)=>{
            return movie!==itemToDelete
      })
      this.setState({movies:newMovies});
    }  




  render(){
    const filterMovies=this.state.movies.filter(movie=>{
		return( movie.category.toLowerCase().includes(this.state.searchfield.toLowerCase())
	           
             

  )}) 
  

   return(

   <div className='tc'>
   	
   <Searchbox searchchange={this.onSearchchange} movies={this.state.movies}/>
    <Cardlist movies={filterMovies} searchTrueFalse={this.state.searchTrueFalse} handleDelete={this.handleDelete}/>

   </div>


   	);


  }




}


export default MyCard;