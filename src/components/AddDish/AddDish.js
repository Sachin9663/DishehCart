import React,{Component} from 'react'
import './AddDish.css'


class AddDish extends Component{
  
    constructor(props){
        super(props);
        this.state={
            dish:{}
        }
    }
    handleOnChange=(event)=>{
        
        let newDish={};
        newDish[event.target.name]=event.target.value 
        this.setState({
         dish:{
             ...this.state.dish,
             ...newDish
         }
     })
    }

    render(){
        return (
            <div className="container">
             <form
                   onSubmit={(event)=>this.props.handleAddDish(event,this.state.dish)} >

              <input
                  onChange={this.handleOnChange}
                  type="text" value={this.state.dish.name}
                  name="name" placeholder="Dish Name Enter here" autoComplete="off" required/>
              <input onChange={this.handleOnChange}
                     type="text"
                     value={this.state.dish.desc}
                     name="desc" placeholder="Description" autoComplete="off" required/>

                 <button type="submit">Add item</button>
              </form>
            </div>
          )
    }
}
export default AddDish
