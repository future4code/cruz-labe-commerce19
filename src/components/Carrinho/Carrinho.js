import React from "react";
import styled from 'styled-components'



const Carrinhobox = styled.div`
  background:white;
  width:230px;
  padding:0%;
  margin-top:50px;
  display:flex;
  flex-wrap: wrap;
color:black;
align-items: center;


@media(max-width: 800px) {
  width:95%;
  margin:2.5%;
  }


`

const H2 = styled.h2`
  margin:auto;
width:100%;
  padding-top: 20px;
  padding-bottom:30px;
  font-size:20px;
  text-transform:uppercase;
      font-weight: 700;
      color: #444457;
      letter-spacing:3px;
`


const Qtd = styled.div`
 width:10px;
 padding:5px;
 display:flex;

 @media(max-width: 800px) {
  width:12%;
 padding:1%;
  }
`

const Produto = styled.div`
 width:100px;
 padding:5px;
 display:flex;

 @media(max-width: 800px) {
  width:68%;
 padding:1%;
  }

`

const Botao = styled.button`
  width: 75px;
  text-align:center;
  padding: 5px;
  border: 2px solid black;
  color:black;
  font-family: 'Montserrat', sans-serif;
  text-transform:uppercase;
 font-size:11px;
transition: all 1s ease;
&:hover {
  background: black;
  color:white;
}

`


const ProdutoTotal = styled.div`
  width:100%;
  background:#2E3836;
  color:white;
  margin-top:20px;
  padding-top:20px;
  padding-bottom:20px;
  font-family: 'Montserrat', sans-serif;
  text-transform:uppercase;
 font-size:11px;
 font-weight: 700;

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