import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    width: 200px;

    img{
      width: 100%;
    }

`

const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    align-items: left;
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
      <CardContainer>
        <img alt='imagem do produto' src='https://picsum.photos/200'/>
        <CardInfo>
          <p>{this.props.name}</p>
          <p>{this.props.value}</p>
          <AddToCartButton>Adicionar no carrinho</AddToCartButton>
        </CardInfo>
      </CardContainer>
    );
  }
}
