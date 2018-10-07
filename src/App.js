import React, { Component } from 'react';
import Ninjas from './Ninjas';
import NewNinja from './NewNinja';

class App extends Component {
  state = {
    ninjaList: [
      { name: 'One', age: 10, belt: 'black', id: 1 },
      { name: 'Teo', age: 23, belt: 'green', id: 2 },
      { name: 'Three', age: 20, belt: 'Flow', id: 3 }
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjaList = [...this.state.ninjaList, ninja];
    console.log(ninja)
    this.setState({
      ninjaList: ninjaList
    });
    console.log(this.state);
  }

  deleteNinja = (id) => {
    let filteredNinjas = this.state.ninjaList.filter(ninja => {
      return ninja.id !== id;
    });
    this.setState({
      ninjaList: filteredNinjas
    })
  }

  render() {
    return(
      <div>
        <h2>Welcome Ninjas!</h2>
        <Ninjas  ninjaList={ this.state.ninjaList } deleteNinja={ this.deleteNinja }/>
        <NewNinja addNinja={ this.addNinja }/>
      </div>
    );
  }
}

export default App;