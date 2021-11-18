import React,{Component} from 'react';
import './Searchbox.css';

class Searchbox extends Component {



   constructor(props){
     super(props)
     

     this.state={
        suggestions:[],
        item:[],
        text:'',
        ana:[],
     }
  }

   componentDidMount(){
     this.props.movies.forEach(
       movie=>{ 
        if(this.state.ana.indexOf(movie.category) === -1){
        this.state.ana.push(movie.category)
          }
        })
   }

   onTextChanged=(event)=>{
       const value=event.target.value;

       if(value.length===0){
          this.setState(()=>({
                                 suggestions:[],text:''
          }));
       }else{
        const regex= new RegExp(`^${value}`,'i');
        const suggestions=this.state.ana.sort().filter(v=>regex.test(v))
        this.setState(()=>({suggestions,text:value}))
       }

      
     

}
   
  
  suggestionSelected(value){
   
    this.setState({
      text:value,
      suggestions:[],
    })

  }

 renderSuggestions (){

   const {suggestions}=this.state;
   if(suggestions.length===0){
     return null;
   }
   return (
           <ul className="tc center br3">
           {suggestions.map((item)=><li onClick={()=>this.suggestionSelected(item)} >{item}</li>)}
           </ul>
    );
 }

   render(){
  const {text} =this.state;
  return (
  	<div className='pa2 mb5  autocompleteText'>
  
     <input
                           value={text}
                           className='pa3 ba br3  filterInput'
                            types='search'
                            placeholder='Filter per category'
                            onChange={this.props.searchchange}
                            onInput={this.onTextChanged}
                        />
      {this.renderSuggestions()}
    
    
  
    </div>        
  	);
}
}
export default Searchbox;