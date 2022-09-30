
import md5 from 'js-md5';
function ApiFunction() {
    const PUBLIC_KEY = '5ecc5f91ce6ea20083af43b00c42b219'; // your public key
    const PRIVATE_KEY = `${process.env.REACT_APP_MARVEL_KEY}`; // your private key
    const ts = Number(new Date());
    const hash = md5.create();
    hash.update(ts + PRIVATE_KEY + PUBLIC_KEY);
    console.log(ts, hash)
    fetch(`https://gateway.marvel.com/v1/public/characters?ts=${ts}&orderBy=name&limit=10&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
    )
    .then(res => res.json())
    .then(data => console.log(data))
   
   
    return (
        <div>
            <h1>API FUNCTION</h1>
        </div>
    );
}

export default ApiFunction;