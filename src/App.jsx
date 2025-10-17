import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const Card = ({ title, rating, isCool }) => {
	return (
		<div className='card'>
			<h2>{title}</h2>
		</div>
	);
};

const App = () => {
	return (
		<div className='card-container'>
			<Card title='Star Wars' rating={5} isCool={true} />
			<Card title='Avatar' rating={4} isCool={false} />
			<Card title='The Lion King' rating={5} isCool={true} />
		</div>
	);
};

export default App;
