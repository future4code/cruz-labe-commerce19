import React from 'react';
import ProductList from './components/ProductList.js'

export default class App extends React.Component {
  state={
    products:[{name:'Produto 1', value:10},{name:'Produto 2', value:20}, {name:'Produto 3', value:15}],
  }
  fromMaxToMin = () => {
    let ordenedProducts = this.state.products;
    ordenedProducts.sort(function compare(a, b) {
      if (a.value < b.value) return -1;
      if (a.value > b.value) return 1;
      return 0;
    })
    this.setState({products: ordenedProducts})
    
  }
  
  fromMinToMax = () => {
    let ordenedProducts = this.state.products;
    ordenedProducts.sort(function compare(a, b) {
      if (a.value > b.value) return -1;
      if (a.value < b.value) return 1;
      return 0;
    })
    this.setState({products: ordenedProducts})
    
  }
  render() {
    return (
      <>
        <ProductList onChangeMin={this.fromMaxToMin} onChangeMax={this.fromMinToMax} products={this.state.products}/>
      </>
    );
  }
}
