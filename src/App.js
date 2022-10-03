import SearchBar from './components/SearchBar';
import Results from './components/Results';
import { useEffect, useState } from 'react';
import md5 from 'js-md5';

function App() {
	const [searchString, setSearchString] = useState('');
	const [results, setResults] = useState([]);
	const characterId = searchString;

	function handleChange(event) {
		setSearchString(event.target.value);
	}

	useEffect(() => {
		ApiFunction();
	}, []);

	function ApiFunction() {
		const PUBLIC_KEY = '5ecc5f91ce6ea20083af43b00c42b219'; // your public key
		const PRIVATE_KEY = `${process.env.REACT_APP_MARVEL_KEY}`; // your private key
		const ts = Number(new Date());
		const hash = md5.create();
		hash.update(ts + PRIVATE_KEY + PUBLIC_KEY);
		fetch(
			`https://gateway.marvel.com/v1/public/characters?ts=${ts}&limit=10&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
		)
			.then((res) => res.json())
			.then((res) => {
				console.log(data);
				setResults(res.data);
				setSearchString('');
			})
			.catch(console.error);
	}

	function handleSubmit(event) {
		event.preventDefault();
		ApiFunction();
	}
	return (
		<div className='App'>
			<h1>Marvel Comic Cover Art Finder</h1>
			<SearchBar
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				searchString={searchString}
			/>
			<Results results={results} />
		</div>
	);
}

export default App;
