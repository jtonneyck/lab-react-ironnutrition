import React from 'react';

const FoodOverview = ({foods}) => {

    return (
        <div>
            <h1>Today's foods</h1>
            <ul>
                {foods && foods.map((food)=> 
                    <li>{food.amount} {food.name}(s) = {food.amount * food.calories}</li>
                )}
            </ul>
        </div>
    );
}

export default FoodOverview;
