import React,{Component} from 'react';
import DishList from '../containers/DishList/DishList';
import './menu.css'


class Menu extends Component {
    state = {
        dishes: [{
            name: "Poha",
            desc: "Specialty from Madhya Pradesh. Common snack in central part of India. Flattended rice, potato, turmeric.",
        },

            {
                name: "Kadai paneer",
                desc: "Paneer and green peppers in tomato gravy.",
            }]
    }

    render() {
        return (
            <div className="Menu">
                <DishList dishes={this.state.dishes}/>
            </div>

        )
    }
}

export default Menu;
