import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import axios from 'axios';

class App extends React.Component{
  constructor(){
    super()

    this.state = {
      products: ['','','','']
    }
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount(){
    this.getProducts()
  }

  getProducts = () => {
    axios.get('/api/products').then(res => {
      this.setState({
        products: res.data
      })
    })
  }

  render(){
    return (
      <div className="App">
        <Dashboard products={this.state.products}/>
        <Form />
        <Header />
      </div>
    );
  }
}

export default App;
