import './App.css'
import Favourites from './components/Favourites'
import RecipeSearch from './components/RecipeSearch'
import RootLayout from './components/RootLayout'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<RecipeSearch />}></Route>
      <Route path='/favourites' element={<Favourites />}></Route>
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
