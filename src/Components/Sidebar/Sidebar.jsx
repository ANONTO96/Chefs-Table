/* eslint-disable react/prop-types */

const Sidebar = ({sidebar,handleRemove,preparedRecipe,calculateTimeandCalories,totalTime,totalCalories}) => {
    return (
        <div className="md:w-1/3 border-2 rounded-2xl text-gray-500 h-fit">

            {/* want to cook table */}
            <div className="overflow-x-auto">
                <h1 className="text-center text-black font-semibold text-xl p-2">Want To Cook: {sidebar.length}</h1>
                <hr />
                
  <table className="table text-gray-600">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
         {
            sidebar.map((recipe,index)=> (
                <tr key={index} className="hover">
        <th>{index + 1}</th>
        <td>{recipe.recipe_name}</td>
        <td>{recipe.preparing_time}</td>
        <td>{recipe.calories}</td>
        <td>
        <button onClick={()=>{
            handleRemove(recipe.recipe_id)
            calculateTimeandCalories(recipe.preparing_time,recipe.calories)
        }} className="btn bg-emerald-400 text-black rounded-3xl px-4 md:px-6 lg:px-10 my-2 font-medium hover:text-white hover:bg-emerald-500 ">Preparing</button>
        </td>
      </tr>
            ))
          }
    </tbody>
  </table>
            </div>
            {/* currently cooking table */}
            <div className="overflow-x-auto mt-5 border-t-2 rounded-2xl">
                <h1 className="text-center text-black font-semibold text-xl p-2">Currently Cooking: {preparedRecipe.length}</h1>
                <hr />
                
  <table className="table text-gray-600">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
    <tbody>
         {
            preparedRecipe.map((recipe,index)=> (
                <tr key={index} className="hover">
        <th>{index + 1}</th>
        <td>{recipe.recipe_name}</td>
        <td>{recipe.preparing_time}</td>
        <td>{recipe.calories}</td>
      </tr>
            ))
          }
          <tr className="hover border-none">
        <th></th>
        <td></td>
        <td>Total Time :{totalTime}</td>
        <td>Total Calories :{totalCalories}</td>
      </tr>
    </tbody>
  </table>
            </div>
        </div>
    );
};

export default Sidebar;