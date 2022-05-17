import React, { Component } from 'react';
import Card from './Card';
import ReactPaginate from "react-paginate";
import './Cardlist.css'
class Cardlist extends Component{

   constructor(props){
     super(props)
     this.state={
        pageNumber:0,
        pagesVisited:0
     }
  }

    changePage = ({ selected }) => {
    
    this.setState({pageNumber:selected});
    
  };
 

    


    

   render(){
  const users=this.props.movies;

  

    const usersPerPage = 3;
    
  const pagesVisited = this.state.pageNumber * usersPerPage * this.props.searchTrueFalse;


	const Cardcomponent=users
  .slice(pagesVisited, pagesVisited + usersPerPage)
	.map((user,i)=>{
		return <Card key={i}
		id={user.id}
		title={user.title}
		category={user.category}
		likes={user.likes}
		dislikes={user.dislikes}
    user={user}
    handleDelete={()=>this.props.handleDelete(user)}
		/>
	})

  const pageCount = Math.ceil(users.length / usersPerPage );	
	

	return (
		<div>
  {Cardcomponent};
  <ReactPaginate
       
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={this.changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>);
}
}
export default Cardlist;