import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { supabase } from './client'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator'
import ViewCreator from './pages/ViewCreator'
import ShowCreators from './pages/ShowCreators'


const App = () => {

  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data } = await supabase
        .from('creators')
        .select()
        .order('created_at', { ascending: true });

      setCreators(data);
    }
    fetchCreators();
  });

  // let element = useRoutes([
  //   {
  //     path: "/",
  //     element: <ShowCreators data={creators} />
  //   },
  //   {
  //     path: "/new",
  //     element: <AddCreator />
  //   },
  //   {
  //     path: "/edit/id",
  //     element: <EditCreator data={creators} />
  //   }
  // ])

  return (
    <>
      <div className='App'>
        <h1>Creatorverse</h1>
        <h3>Find your favorite creators here!</h3>
        <Link to='/'><button className='headerBtn'>Explore Creators</button></Link>
        <Link to='/new'><button className='headerBtn'>Add Creators</button></Link>
      </div>
      <Routes>
        <Route path="/" element={<ShowCreators data={creators} />} />
        <Route path="/new" element={<AddCreator />} />
        <Route path="/edit/:id" element={<EditCreator data={creators} />} />
        <Route path="/detail/:id" element={<ViewCreator />} />
      </Routes>
      {/* {element} */}
    </>
  )
}

export default App
