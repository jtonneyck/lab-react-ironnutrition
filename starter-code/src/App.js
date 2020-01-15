import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import FoodBox from "./components/FoodBox";
import foods from "./foods.json";
import './index.scss';
import FoodOverview from "./components/FoodOverview"
class App extends Component {

  state = []
  render() {
    return (
      <>
      <div className="columns u-p-10">
        <div className="column is-full">
          <input className="input" type="text" placeholder="Text input" />
        </div>
      </div>
      <div className="columns u-p-10">
        <div className="column is-half">
            {foods.map((food)=> 
              <FoodBox {...food} />
            )}
        </div>
        <div className="column is-half">
              <FoodOverview />
        </div>
      </div>
      </>
    );
  }
}

export default App;
