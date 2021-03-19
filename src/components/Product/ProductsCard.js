import React from 'react'
import styled from 'styled-components'


const CardInfo = styled.div`
    flex-direction: column;
    width: 220px;
    align-items: left;


    img{
      width: 100%;
      transition: transform .9s ease;
      opacity:100%;
    }
    img:hover{
      opacity:90%;
  transform: scale(0.9);
    }

    div{
      padding: 16px;
      text-transform:uppercase;
      font-weight: 400;
      color: #444457;
      letter-spacing:3px;
    }
    
    p{
        margin: 4px 0;
        color: #281B2E;
        font-weight: 700;
    }
`
const AddToCartButton = styled.button`
    align-self: center;
    margin-top: 10px;
  padding: 7px;
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

export default class ProductsCard extends React.Component {
  render () {
    return (
      
   
        <CardInfo>
        <img alt='imagem do produto' src='https://picsum.photos/200'/>
          <div>{this.props.name}
          <p>R${this.props.value}</p>
          <AddToCartButton onClick={()=>{this.props.addProduct(this.props.name, this.props.value)}}>Adicionar no carrinho</AddToCartButton>
          </div></CardInfo>
      
    );
  }
}
