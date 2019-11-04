import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Flap from './components/Flap/Flap';
import calendarData from './calendar-data.json';

function App() {
	return (
		<div className="App">
      <Header />
      <div className="FlapWrapper">
      {calendarData.map(item => {
				return <Flap key={item.day} day={item.day} backgroundColor={item.backgroundColor} text={item.text} />;
      })}
      </div>
		</div>
	);
}

export default App;
