import React, { Component } from "react";
import Dish from "../../dish/dish";
import AddDish from "../../AddDish/AddDish";
import './DishList.css'

export class DishList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: props.dishes,
    
    };
  }

handleAddDish=(event,dish)=>{
    event.preventDefault();
    console.log(dish);

    let newDishes=this.state.dishes.slice();
     newDishes.push(dish);
     this.setState({
         dishes:newDishes,
     })

 }
 render() {
    return (
      <div className="dish-list ">
      <div className="dishes">
        {this.state.dishes.map((dish,index) => {
         return <Dish dish={dish} key={index} />;})
        }
        </div>
        <h3>Add more dishes here</h3>
        <AddDish handleOnChange={this.handleOnChange} handleAddDish={this.handleAddDish}/>
      </div>

    );
  }
}

export default DishList;
