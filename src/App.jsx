import './App.css'
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import SharedLayout from "./components/common/SharedLayout/SharedLayout.jsx";
import Catalog from "./pages/Catalog/Catalog.jsx";
import Favorites from "./pages/Favorites/Favorites.jsx";

function App() {

  return (
    <Routes>
	    <Route path="/" element={<SharedLayout />}>
		    <Route index element={<Home/>} />
		    <Route path="catalog" element={<Catalog />} />
		    <Route path="favorites" element={<Favorites />} />
	    </Route>
    </Routes>
  )
}

export default App
