import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Recipes from './Components/Recipes/Recipes'
import Sidebar from './Components/Sidebar/Sidebar'
import Title from './Components/Title/Title'

function App() {
  const [sidebar,setSidebar] = useState([])
  const [preparedRecipe, setPreparedRecipe] = useState([])
  const [totalTime,setTotalTime] = useState(0)
  const [totalCalories,setTotalCalories] = useState(0)




  const handleSidebar = (recipe) => {
    const isExist = sidebar.find(prevRecipe => prevRecipe.recipe_id === recipe.recipe_id)

    if(!isExist){
      setSidebar([...sidebar,recipe])
    }
    else{
      alert('Recipe already added to the queue')
    }
  }

  const handleRemove = (id) => {
    // find which recipe to remove
    const deletedRecipe = sidebar.find(recipe => recipe.recipe_id === id)
    // removing from want to cook table
    const updatedQueue = sidebar.filter(recipe => recipe.recipe_id !== id)
    setSidebar(updatedQueue)
    setPreparedRecipe([...preparedRecipe, deletedRecipe])
  }

  const calculateTimeandCalories = (time, calories) => {
 setTotalTime(totalTime + Number(time))
 setTotalCalories(totalCalories + Number(calories))
  }

  return (
    <>
     {/* header */}
     <Navbar></Navbar>
     {/* banner */}
    <div className='my-5'>
    <Banner></Banner>
    </div>
     {/* title */}
     <Title></Title>
     {/* recipe card section*/}
     <section className='flex flex-col md:flex-row gap-8'>
      {/* card section */}
      <Recipes handleSidebar={handleSidebar}></Recipes>
      {/* side bar */}
      <Sidebar sidebar={sidebar} handleRemove={handleRemove} preparedRecipe={preparedRecipe} calculateTimeandCalories={calculateTimeandCalories}
      totalTime={totalTime} totalCalories={totalCalories}></Sidebar>
     </section>
      
    </>
  )
}

export default App
