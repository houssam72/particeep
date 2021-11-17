import React,{Component} from 'react';
import './Searchbox.css';

class Searchbox extends Component {

   constructor(props){
     super(props)
     this.items=[
        'Comedy','Animation','Drame','Thriller',
     ];

     this.state={
        suggestions:[],
        item:[],
        text:'',
     }
  }

   onTextChanged=(event)=>{
       const value=event.target.value;

       if(value.length===0){
          this.setState(()=>({
                                 suggestions:[],text:''
          }));
       }else{
        const regex= new RegExp(`^${value}`,'i');
        const suggestions=this.items.sort().filter(v=>regex.test(v))
        this.setState(()=>({suggestions,text:value}))
       }
      
     console.log(this.state.item, this.items.sort(),this.items)  
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
           <ul>
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