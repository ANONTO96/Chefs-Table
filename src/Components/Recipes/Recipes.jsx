/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";

const Recipes = ({handleSidebar}) => {
    const [recipes,setRecipes] = useState([])

    useEffect(() => {
        fetch('./recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
    console.log(recipes)
    return (
        <div className="md:w-2/3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            {
                recipes.map(recipe=> (
                    <div key={recipe.recipe_id} className="card card-compact bg-base-100 shadow-2xl border-2">

                    <figure className="px-5 py-8">
                      <img className="md:h-80 w-full object-cover rounded-2xl"
                        src={recipe.recipe_image}
                        alt="Shoes" />
                    </figure>

                    <div className="card-body">
                      <h2 className="card-title text-xl font-medium">{recipe.recipe_name}</h2>
                      <p className="text-lg text-gray-600">{recipe.short_description}</p>
                      <h3 className="my-3 text-lg font-medium text-gray-600">Ingredients: {recipe.ingredients.length}</h3>

                      <ul className="ml-5 mb-2">
                        {recipe.ingredients.map((item,index) => <li className="list-disc text-gray-500 text-lg" key={index}>{item}</li>)}
                      </ul>

                      <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                        <i className="fa-solid fa-clock text-lg"></i>
                        <p className="text-lg">{recipe.preparing_time} min</p>
                        </div>
                        <div className="flex items-center gap-2">
                        <i className="fa-solid fa-fire text-lg"></i>
                        <p className="text-lg">{recipe.calories} calories</p>
                        </div>
                      </div>


                      {/* buttuon */}
                      <div className="card-actions">
                        <button onClick={()=>handleSidebar(recipe)} className="btn bg-emerald-400 rounded-3xl px-12 my-3 font-medium text-lg hover:text-white hover:bg-emerald-500 ">Want To Cook</button>
                      </div>
                    </div>
                  </div>
            ))
            }
            </div>
        </div>
    );
};

export default Recipes;