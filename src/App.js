import React from 'react';
import store from './store/index';
import update_person from './store/actions/personAction';

import update_game from './store/actions/gameAction'



function App() {

  const updatePerson = () => {

    store.dispatch(update_person)
  }

  const updateGame =() => {
    store.dispatch(update_game)
  }







  return (
    <div className="App">

      <h1>Redux-React Tutorial</h1>
      Person Name :{store.getState().person.name}
      <button onClick={updatePerson}>Update Person</button>
      <br />
      Game Name :{store.getState().game.game}
      <button onClick={updateGame}>Update Game</button>

    </div>
  );
}

export default App;
