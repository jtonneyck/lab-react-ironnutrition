import React from 'react';

const FoodOverview = ({foods}) => {

    return (
        <div>
            <h1>Today's foods</h1>
            <ul>
                {foods && foods.map((food)=> 
                    food.quantity > 0 && <li>{food.quantity} {food.name}(s) = {food.quantity * food.calories}</li>
                )}
            </ul>
        </div>
    );
}

export default FoodOverview;
