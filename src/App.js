import React from 'react';
import Header from './Header'
import Table from './Table'
import {address} from './users.js'


class App extends React.Component{

  state = { 
    address: address
  };

  render() { 
    return (
          <div>
            <Header />
            <Table user = 'Driver' address = {this.state.address} />
            <Table user = 'Passenger' address = {this.state.address} />
          </div>
      )
  }
}

export default App;
