import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { getMealById } from '../../api';
import Loader from '../Loader';

export default function Recipe() {
  const [recipe, setRecipe] = useState([]);
  const [showRecipe, setShowRecipe] = useState(false);
  const {id} = useParams();
  const {goBack} = useHistory();
  
  useEffect(()=>{
    getMealById(id).then(data => setRecipe(data.meals[0]));
  }, [])

  function handleRecipeShow(){
    setShowRecipe(!showRecipe)
  }
  return (
    <>
      <button className='btn' onClick={goBack}>Go Back</button>
      {!recipe.idMeal ? <Loader/> : (
        <div className='recipe'>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h1>{recipe.strMeal}</h1>
          <h6><b>Category: </b>{recipe.strCategory}</h6>
          {recipe.strArea ? <h6><b>Area: </b> {recipe.strArea}</h6> : null}
          <p>{recipe.strInstructions}</p>
          <button className='btn' onClick={ handleRecipeShow }>{!showRecipe ? "Show recipe" : "Hide recipe"}</button>
          {showRecipe ? (
            <table>
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recipe).map((key, id)=>{
                if(key.includes('Ingredient') && recipe[key]){
                  return (
                    <tr key={id}>
                      <td>{recipe[key]}</td>
                      <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  )
                }
              })}
            </tbody>
          </table>
          ) : null}
          
          {recipe.strYoutube ?  (
            <div className='row'>
              <h5>Video Recipe</h5>
              <iframe src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} title={id} allowFullScreen />
              {/* <iframe width="640" height="360" src="https://www.youtube.com/embed/pCJT2yYsG8Y" title="1000 $ lik tekin dars | Ibratjon Ibragimov" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/> */}
            </div>
          ) : null}
        </div>
      )}
    </>
  )
}
