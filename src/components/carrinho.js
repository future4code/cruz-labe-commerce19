import React from "react";
import styled from 'styled-components'



const Carrinhobox = styled.div`
border: 1px solid black;
width: 80%;
margin:5%;
padding:5%;
display:flex;
flex-wrap: wrap;

`

const H2 = styled.h2`
margin:10px;
font-size:30px;
flex-basis: 100%;
`


const Qtd = styled.div`
flex-basis: 10%;

`

const Produto = styled.div`
flex-basis: 60%;

`

const Botao = styled.button`
flex-basis: 20%;
margin:10px;
border:0;
`


class Carrinho extends React.Component {


  render() {
    return ( 

<div>
    <Carrinhobox>
<H2>Carrinho</H2>

<Qtd>5</Qtd> <Produto>nome produto</Produto>
<Botao><button>remover</button></Botao>

<ProdutoTotal>Valor total</ProdutoTotal>

</Carrinhobox>
   </div>


    );
}

}

export default Carrinho;
