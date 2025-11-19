import { useState, useEffect } from 'react';
import "./ApiThing.css"

function ApiThing({ itemfunction }) {

  const [recipe, setRecipe] = useState(null);

  const [newrecipe, setnewrecipe] = useState(false);

  const fetchRecipe = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(res => {
        if (!res.ok) {
          throw new Error('No recipe :(');
        }
        return res.json();
      })
      .then(data => {
        let food = data.meals[0]

        let ingredientList = [];
        for (let i = 0; i < 20; i++) {
          let ingrname = `strIngredient${i + 1}`;
          let measname = `strMeasure${i + 1}`;

          let ingrnamedata = food[ingrname];
          let measnamedata = food[measname];

          if (ingrnamedata && ingrnamedata !== "") {
            ingredientList.push({
              ingredient: ingrnamedata,
              measure: measnamedata
            });
          }

        }

        setRecipe({
          name: food.strMeal,
          strArea: food.strArea,
          strInstructions: food.strInstructions,
          image: food.strMealThumb,
          ingredients: ingredientList
        });

        setnewrecipe(false);
      })
      .catch(err => {
        setRecipe(null);
      });
  };

  useEffect(() => {
    if (newrecipe) {
      fetchRecipe();
    }
  }, [newrecipe]);



  return (
    <div>
      <h1>Recipes!</h1>

      <button onClick={() => setnewrecipe(true)}>
        Get New Recipe
      </button>
      <div id='recipebox'>
        {!recipe ? (
          <p>No Recipe</p>
        ) : (
          <>
            <h2>{recipe.name}</h2>
            <img src={recipe.image} width={"70%"} alt={recipe.name} />
          </>
        )}
        <ul className="inglist">
          {recipe?.ingredients.map((item, index) => (
            <li>
              {item.ingredient} : {item.measure}

              <button className='listadderbutton'
                onClick={() => itemfunction({
                  name: item.ingredient,
                  image: `https://www.themealdb.com/images/ingredients/${item.ingredient.toLowerCase().replace(/ /g, "_")}.png`,
                  quantity: 1 //i thought about making the quantity match the measure but i dont want to. im tired.
                })}
              >
                Add to List
              </button>


            </li>
          ))}
        </ul>


      </div>

    </div>
  );
}

export default ApiThing;