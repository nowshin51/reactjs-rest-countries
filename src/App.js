import logo from './logo.svg';
import './App.css';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}
      <Countries></Countries>
      {/* <LoadCountries></LoadCountries> */}
    </div>
  );
}

// function LoadCountries(){
//   const [countries, setCountries] = useState([]);
//   useEffect( () => {
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))
//   }, [])
//   return(
//     <div>
//       <h1>Visiting countries of the world!!</h1>
//       <h3>Available countries : {countries.length}</h3>
//     </div>
//   )
// }

export default App;
