import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Flap from './components/Flap/Flap';
import calendarData from './calendar-data.json';
import {getRandomNumber} from "./helpers/getRandomNumber";

function App() {
  const randomArray = [];
  while(calendarData.length > 0) {
    const max = calendarData.length -1;
    const randomIndex = getRandomNumber(max);
    const flapData = calendarData.splice(randomIndex, 1);
    randomArray.push(flapData[0]);
  }
	return (
		<div className="App">
      <Header />
      <div className="FlapWrapper">
      {randomArray.map(item => {
				return <Flap key={item.day} day={item.day} backgroundColor={item.backgroundColor} text={item.text} />;
      })}
      </div>
		</div>
	);
}

export default App;
