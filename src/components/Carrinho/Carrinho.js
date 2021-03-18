import React from "react";
import styled from 'styled-components'



const Carrinhobox = styled.div`
  border: 1px solid black;
  width: 90%;
  margin:2.5%;
  padding:2.5%;
  display:flex;
  flex-wrap: wrap;

`

const H2 = styled.h2`
  margin:auto;
  font-size:30px;
  flex-basis: 100%;
  padding-top: 20px;
  padding-bottom:30px;
`


const Qtd = styled.div`
  flex-basis: 10%;

`

const Produto = styled.div`
  flex-basis: 50%;

`

const ProdutoTotal = styled.div`
  flex-basis: 60%;
  padding-top:20px;
  padding-bottom:20px;

`

const Botao = styled.button`
  flex-basis: 15%;
  border:0;
  background:black;
  color:white;
`


class Carrinho extends React.Component {


  render() {
    const products = this.props.products.map((product)=>{
      return <Produto><Qtd>{product.quantity}</Qtd><Produto>{product.name}</Produto><Botao onClick={()=>this.props.removeProduct(product.name, product.value)}>remover</Botao></Produto>
    })
    return ( 
      <div>
        <Carrinhobox>
         <H2>Carrinho</H2>
          {products}
          <ProdutoTotal>Valor total: {this.props.totalValue}</ProdutoTotal>
          </Carrinhobox>
      </div>
    )
}

}


export default Carrinho;
