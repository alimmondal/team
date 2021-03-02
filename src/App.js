
import './App.css';
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';
import playerData from './data/data.json'
import Player from './components/Player/Player';
import Cart from './components/Cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [players, setPlayers] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setPlayers(playerData);
    console.log(playerData);
  }, [])

  const handleAddPlayer = (player) =>{
    const newCart = [...cart, player];
    setCart(newCart);
  }
// Bootstrap class is used;
  return (
    <div className="container">
      <Header></Header>     
      <h1 className="text-center text-danger">Plyers' Profile</h1>
      <div className="appFlex container">
        <div className="row">
        <div className="appPlayer col">
            {
              players.map(player => <Player player={player} key={player.id} handleAddPlayer={handleAddPlayer}></Player> )
            }
        </div>
        <div className="col playerCart">
            <h3>Loaded Player: {players.length}</h3>
            <Cart cart={cart}></Cart>
            <h2>Added Player:</h2>
            <ul>
             {
              cart.map(player => <li>✅{player.name}</li> )
              }
            </ul>          
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
