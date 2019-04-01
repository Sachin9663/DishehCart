import React from 'react';
import './dish.css';


const Dish=(props)=>{
    function handleClick(){
        console.log("Details like price, taste, gredients");
        
    }
    return(
        <div className="dish_card" onClick={handleClick}>
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