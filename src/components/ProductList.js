import React from 'react'
import styled from 'styled-components'
import ProductsCard from './ProductsCard.js'

const Elements = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    align-items: center;
    justify-content: space-around;
    padding: 16px 0;
`
const ProductContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 16px;
    padding:16px;
`

export default class ProductsList extends React.Component {
  
  
  selectHandle = (event) => {
    if(event.target.value === 'max'){
      console.log('estou no max')
      this.props.onChangeMax();
    }else if (event.target.value === 'min'){
      console.log('estou no min')
      this.props.onChangeMin();
    }
  }

  componentDidMount(){
    this.props.onChangeMax();
  }

  render () {
    const products = this.props.products.map((p)=>{
      return <ProductsCard name={p.name} value={p.value}/>
    })
    return (
      <MainContainer>
        <Elements>
          quantidade de produtos = {this.props.products.length}
          <select onChange={this.selectHandle}>
            <option value='max'>Maior preço</option>
            <option value='min'>Menor preço</option>
          </select>
        </Elements>
        
        <ProductContainer>
          {products}
        </ProductContainer>
      </MainContainer>
    );
  }
}
