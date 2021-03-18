import React from 'react';
import ProductList from './components/Product/ProductList.js'
import Carrinho from './components/Carrinho/Carrinho.js'
import Filtro from './components/Filtro/filtro.js'
import styled from 'styled-components'

const MainContainer = styled.div`
width: 100%;
display: flex;
`


export default class App extends React.Component {
  state={
    products:[{name:'Produto 1', value:10, quantity: 0},{name:'Produto 2', value:20, quantity: 0}, {name:'Produto 3', value:15, quantity: 0}],
    cartProducts: [],
    filteredProducts : [{name:'Produto 1', value:10, quantity: 0},{name:'Produto 2', value:20, quantity: 0}, {name:'Produto 3', value:15, quantity: 0}],
    totalValue: 0
  }
 
  filteredProducts = (min, max, name ) => {
      const newFilteredProduct = this.state.products.filter((product) => {
        if(min === '' && max === ''){
          return product

        }
        if (product.value >= min && product.value <= max){
         return product
        }          
       })
       let newFilteredProductName = [];
       if(!(name === '')){
        newFilteredProductName = newFilteredProduct.filter((product)=>{
          if(product.name.includes(name)){
            return product;
          }
        })
        this.setState({filteredProducts: newFilteredProductName})
       }else{
        this.setState({filteredProducts: newFilteredProduct})
       }
  }


  
  /*
  *  Lógica de ordenação
  */
  fromMaxToMin = () => {
    let ordenedProducts = this.state.filteredProducts;
    ordenedProducts.sort(function compare(a, b) {
      if (a.value < b.value) return -1;
      if (a.value > b.value) return 1;
      return 0;
    })
    this.setState({filteredProducts: ordenedProducts})
    
  }
  fromMinToMax = () => {
    let ordenedProducts = this.state.filteredProducts;
    ordenedProducts.sort(function compare(a, b) {
      if (a.value > b.value) return -1;
      if (a.value < b.value) return 1;
      return 0;
    })
    this.setState({filteredProducts: ordenedProducts})
    
  }
  /*
  *  Lógica de ordenação
  */
  // tudo o que estiver aqui embaixo é pra adicionar um novo produto no carrinho
  addProduct = (name, value) =>{
  const newCartProducts = this.state.products.filter((product)=>{
    if(product.name === name){
      product.quantity ++;
      this.setState({totalValue: this.state.totalValue + product.value})
    }
    if(product.quantity > 0){
      return product;
    }  
  })
    this.setState({cartProducts: newCartProducts})
  } 

  removeProduct = (name, value) =>{
    const newCartProducts = this.state.products.filter((product)=>{
      if(product.name === name){
        product.quantity --;
        this.setState({totalValue: this.state.totalValue - product.value})
      }
      if(product.quantity > 0){
        return product;
      }  
    })
      this.setState({cartProducts: newCartProducts})
    }
  

    
  render() {
    return (
      <MainContainer>    
        <Filtro filteredProducts={this.filteredProducts}/>
        <ProductList addProduct={this.addProduct} onChangeMin={this.fromMaxToMin} onChangeMax={this.fromMinToMax} products={this.state.filteredProducts}/>
        <Carrinho totalValue={this.state.totalValue} products={this.state.cartProducts} removeProduct={this.removeProduct}/>
      </MainContainer>
    );
  }
}
