import React from 'react';
import ProductList from './components/Product/ProductList.js'
import Carrinho from './components/Carrinho/Carrinho.js'
import Filtro from './components/Filtro/filtro.js'
import fundo from "./img/fundo.png";
import logo from "./img/logo.png";
import styled from 'styled-components'
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

body {
    background: url(${fundo}) #000000;
    color:white;
    margin: 0;
    padding: 0;
    text-align:center;
    font-family: 'Montserrat', sans-serif;
  }

  
input{
border:0;
padding: 5px;
margin:0;
border-radius:5px;
box-shadow: 10px 10px 12px -8px rgba(0,0,0,1);
width:170px;


}


  

`
const MainContainer = styled.div`
width: 100%;
display: flex;

@media(max-width: 800px) {
    flex-wrap:wrap;
  }

`







export default class App extends React.Component {
  state={
    products:[{name:'Produto 1', value:10, quantity: 0},{name:'Produto 1', value:10, quantity: 0},{name:'Produto 1', value:10, quantity: 0},{name:'Produto 2', value:20, quantity: 0}, {name:'Produto 3', value:15, quantity: 0}],
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
      <div>
      <GlobalStyle />
      <img src={logo}/>

      <MainContainer>   
  
        <Filtro filteredProducts={this.filteredProducts}/>
        <ProductList addProduct={this.addProduct} onChangeMin={this.fromMaxToMin} onChangeMax={this.fromMinToMax} products={this.state.filteredProducts}/>
        <Carrinho totalValue={this.state.totalValue} products={this.state.cartProducts} removeProduct={this.removeProduct}/>
      </MainContainer>
      </div>
  
    );
  }
}
