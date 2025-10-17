import { useState } from 'react';
import './App.css';

const Card = ({ title }) => {
	const [hasLiked, setHasLiked] = useState({ initialState: false });

	return (
		<div className='card'>
			<h2>{title}</h2>

			<button onClick={() => setHasLiked({ initialState: true })}>
			{hasLiked.initialState ? '❤️' : '🤍'}
			</button>
		</div>
	);
};

const App = () => {
	return (
		<div className='card-container'>
			<Card title='Star Wars' />
			<Card title='Avatar' />
			<Card title='The Lion King' />
		</div>
	);
};

export default App;
