import { Component } from "react";

import "./Recipe.css";
import FoodService from "../../services/FoodService";

class Recipe extends Component {
  foodService = new FoodService();
  state = {
    recipe: null,
    ingredients: [],
  };
  async componentDidMount() {
    const { id } = this.props.match.params;
    let { meals } = await this.foodService.getRecipe(id);

    let ingredients = [];
    Object.keys(meals[0]).forEach((el) => {
      if (el.startsWith("strIngredient"))
        meals[0][el] && ingredients.push(meals[0][el]);
    });

    this.setState({ recipe: meals[0], ingredients });
    console.log(this.state);
  }
  render() {
    let { recipe, ingredients } = this.state;
    console.log(recipe);
    return (
      <div className="content">
        {recipe && (
          <div className="recipe">
            <div className="recipe__header__inner">
              <div className="recipe__header__img">
                <img src={recipe.strMealThumb} />
              </div>
              <div className="recipe__header__info">
                <h1>{recipe.strMeal}</h1>
                <ul>
                  {ingredients.map((elem) => (
                    <li className={recipe.strCategory}>{elem}</li>
                  ))}
                </ul>
                <div className="recipe__header__instructions">
                  <p>{recipe.strInstructions}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Recipe;
