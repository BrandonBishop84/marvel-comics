import SearchBar from './components/SearchBar';
import Header from './components/Header';
import Results from './components/Results';
import AboutMe from './components/AboutMe';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import md5 from 'js-md5';

function App() {
	const [searchString, setSearchString] = useState('spider-man');
	const [results, setResults] = useState([]);

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
		const url = `https://gateway.marvel.com/v1/public/comics?titleStartsWith=${str}&ts=${ts}&orderBy=title&orderBy=onsaleDate&limit=25&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setResults(res.data.results);
			})
			.catch(console.error);
	}

	return (
		<div>
			<nav className='aboutmelink'>
				<Link to='/aboutme'>About Me</Link>
			</nav>
			<Header />
			<main>
				<SearchBar
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					searchString={searchString}
				/>
				{results.map((result) => {
					return <Results result={result} />;
				})}

				<Routes>
					<Route path='/aboutme' element={<AboutMe />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
