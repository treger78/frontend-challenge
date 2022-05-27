import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import AllCats from './pages/AllCats';
import FavoriteCats from "./pages/FavoriteCats";
import './App.css'

class App extends React.Component {
  render() {
    return (
        <Router>
          <div className='App'>
            <Header />

            <Routes>
              <Route exact path="/" element={<AllCats />} />
              <Route exact path="/favorite-cats" element={<FavoriteCats />} />
            </Routes>
          </div>
        </Router>
    );
  }
}

export default App;
