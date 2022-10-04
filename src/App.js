import SearchBar from './components/SearchBar';
import Results from './components/Results';
import { useEffect, useState } from 'react';
import md5 from 'js-md5';

function App() {
	const [searchString, setSearchString] = useState('wolverine');
	const [results, setResults] = useState();
	/*const [name, setName] = useState([]);
	const [cover, setCover] = useState([]);
	const [character, setCharacter] = useState([]);
	const [coverName, setCoverName] = useState([]);
*/
	function handleChange(event) {
		setSearchString(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		ApiFunction(searchString);
	}

	useEffect(() => {
		ApiFunction(searchString);
	}, []);

	function ApiFunction(str) {
		const PUBLIC_KEY = '5ecc5f91ce6ea20083af43b00c42b219'; // your public key
		const PRIVATE_KEY = `${process.env.REACT_APP_MARVEL_KEY}`; // your private key
		const ts = Number(new Date());
		const hash = md5.create();
		hash.update(ts + PRIVATE_KEY + PUBLIC_KEY);
		const url = `https://gateway.marvel.com/v1/public/comics?titleStartsWith=${str}&ts=${ts}&orderBy=title&limit=25&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				/*setCharacter(res.data.results[0].thumbnail);
				setCover(res.data.results[0].comics.items[0].resourceURI);
				setCoverName(res.data.results[0].comics.items[0].name);

				setName(res.data.results[0].name);
*/
				console.log(res);

				setResults(res.data.results[0]);
				//setSearchString('');
			})
			.catch(console.error);
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
