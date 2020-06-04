import React from 'react';
//import logo from './logo.svg';
import AddColorForm from './components/AddColorForm'
import StarRating from './components/StarRating'
import './App.css';
import './components/styles/StarRating.css';

const logColor = (title, color) =>{
  console.log(`New Color: ${title.value} | ${color.value}`);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <AddColorForm onNewColor={logColor}></AddColorForm>
        <StarRating starsSelected={3} totalStars={7}></StarRating>
      </header>
    </div>
  );
}

export default App;
