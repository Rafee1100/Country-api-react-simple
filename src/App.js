import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
  const[countries,setCountries]= useState([])
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data =>setCountries(data))
  },[])

  const [cart,setCart]=useState([])



  const handleAddCountry =(country)=>{
    const newCart = [...cart,country];
    setCart(newCart)
  }
  
  return (
    
    <div className="App">
      <h3>Country added: {cart.length}</h3>
      <Cart cart={cart}></Cart>
     {
      countries.map(country => <Country country={country} key={country.alpha3Code} handleAddCountry={handleAddCountry}></Country>)
     }
    </div>
  );
}

export default App;
