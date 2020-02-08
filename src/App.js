import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Character from "./components/Character";
import './App.css';
import southpark from "./southpark.json"

function App() {
  const [clicked, setClicked] = useState([]);
  const [message, setMessage] = useState({
    text:"Click an image to begin!",
    textColor: ""
  });
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  const handleClick = id =>{
    if(clicked.includes(id)){
      setMessage({
        text:"You guessed incorrectly!",
        textColor:"text-danger"
      });
      setScore(0);
      setClicked([]);
    } else{
      setMessage({
        text:"You guessed correctly!",
        textColor:"text-success"
      });
      let array = clicked;
      array.push(id);

      let number = score;
      number++;

      setClicked(array);
      if(number > topScore){
        setTopScore(number);
      }
      setScore(number);
    }
  }

  const shuffleCharacters = array => {
    for(let i = array.length - 1; i > 0; i--){
      let j = Math.floor(Math.random() * i)
      let temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array;
  }

  return (
    <div>
      <Navbar 
        message={message.text}
        score={score} 
        topScore={topScore}
        messageColor={message.textColor}
      />
      <div className="container">
        <div className="row">
          {shuffleCharacters(southpark).map(character => (
            <Character
              name={character.name}
              image={character.image}
              id={character.id}
              key={character.id}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
