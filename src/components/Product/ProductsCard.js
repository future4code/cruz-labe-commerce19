import React from 'react'
import styled from 'styled-components'


const CardInfo = styled.div`
    flex-direction: column;
    width: 400px;
    border: 1px solid black;
    padding: 16px;
    align-items: left;

    
    img{
      width: 100%;
    }

    
    p{
        margin: 4px 0;
    }
`
const AddToCartButton = styled.button`
    align-self: center;
    margin-top: 4px;
`

export default class ProductsCard extends React.Component {
  render () {
    return (
      
   
        <CardInfo>
        <img alt='imagem do produto' src='https://picsum.photos/200'/>
          <p>{this.props.name}</p>
          <p>{this.props.value}</p>
          <AddToCartButton onClick={()=>{this.props.addProduct(this.props.name, this.props.value)}}>Adicionar no carrinho</AddToCartButton>
        </CardInfo>
      
    );
  }
}
