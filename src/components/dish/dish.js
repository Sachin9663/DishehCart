import React from 'react';
import './dish.css';


const Dish=(props)=>{
    return(
        <div className="dish_card" >
            <div className="dish-name">
                <h3>{props.dish.name}</h3>
            </div>
            <div className="dish-desc">
                <p>{props.dish.desc}</p>
            </div>

        </div>
    )
}

export default Dish;