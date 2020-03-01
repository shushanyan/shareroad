import React from 'react';
import Header from './Header'
import Table from './Table'
import {address} from './users.js'
import Order from './Order'
import Footer from './Footer'

let containerStyle ={
  paddingLeft: '6%',
    paddingRight: '6%',
    background:' #F9FAFA'
}
class App extends React.Component{

  state = { 
    address: address
  };

  render() { 
    return (
          <div>
              <Header />
              <div className="container" style={containerStyle}>
              <Table user = 'Driver' address = {this.state.address} />
              <Table user = 'Passenger' address = {this.state.address}  />

              <Order/>
             </div>
             <Footer/>
             
          </div>
      )
  }
}

export default App;
