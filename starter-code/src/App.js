import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import FoodBox from "./components/FoodBox";
import foods from "./foods.json";
import './index.scss';
import FoodOverview from "./components/FoodOverview"
import AddFoodForm from "./components/AddFoodForm";

class App extends Component {
  constructor(props){
    super(props)
    this.updateFood = this.updateFood.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.addFood = this.addFood.bind(this);
    this.toggleAddFoodFormVisibility = this.toggleAddFoodFormVisibility.bind(this);
    this.removeFood = this.removeFood.bind(this);
  }

  state = {foods: foods, search: "", toggleAddFoodFormVisibility: false}

  updateFood(name, quantity) {

    let foods = this.state.foods.map((food)=> {
      if(food.name === name) food.quantity = parseInt(food.quantity) + parseInt(quantity);
      return food;
    })

    this.setState(foods);

  }

  removeFood(name) {
    this.setState({
      foods: this.state.foods.filter((food)=> food.name != name)
    });
  }

  addFood(food){
    let foodsCopy = [food,...this.state.foods];
    this.setState({
      foods: foodsCopy
    })

    this.toggleAddFoodFormVisibility();

  }

  updateSearch(event){
    this.setState({
      search: event.target.value
    })
  }

  toggleAddFoodFormVisibility(){
    this.setState({
      foodFormVisible: !this.state.foodFormVisible
    })
  }

  render() {
    return (
      <div className="app">
        <h1 className="u-m-10 u-p-10">IronNutrition</h1>
        <div className="columns u-m-10">
          <div className="column is-full">
            <input className="input" type="text" placeholder="Text input" value={this.state.search} onChange={this.updateSearch} />
          </div>
        </div>

        {this.state.foodFormVisible && 
            <AddFoodForm addFood={this.addFood} toggleAddFoodFormVisibility={this.toggleAddFoodFormVisibility} />
        }

        <div className="columns u-m-10">
          <div className="column">
            <button className="button is-primary" onClick={this.toggleAddFoodFormVisibility} >Add Food </button>
          </div>
        </div>
        <div className="columns u-m-10">
          <div className="column is-half">
              {
                this.state.foods.filter((food)=> 
                  food.name.toLowerCase().includes(this.state.search.toLowerCase())
                )
                .map((food)=> 
                  <FoodBox 
                    {...food} 
                    updateFood={this.updateFood} 
                    removeFood={this.removeFood} 
                  />
                )
              }
          </div>
          <div className="column is-half">
                <FoodOverview foods={this.state.foods}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
