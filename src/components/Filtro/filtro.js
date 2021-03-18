import React from "react";
import styled from 'styled-components'

const MainContainer = styled.div`
    font-family: sans-serif;
    text-align: center;
`
const FiltroTitle = styled.h3`
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
`

const Caixa = styled.div`
    border: 1px solid black;
    padding: 1px 10px 150px;
    width:96%;
    margin: 2%;
    display: block; 
`

export default class Filtro extends React.Component {
  state = {
    minValueInput: '',
    maxValueInput: '',
    nameInput: ''
  }

  minInputHandle = (event) => {
    this.setState({minValueInput: event.target.value})
  }
  maxInputHandle = (event) => {
    this.setState({maxValueInput : event.target.value})
  }
  nameInputHandle = (event) => {
    this.setState({nameInput: event.target.value})
  }

  filter = () => {
    this.props.filteredProducts(this.state.minValueInput,this.state.maxValueInput, this.state.nameInput)
  }


  render() {
    
    return (
      <MainContainer>
        <Caixa>
        <FiltroTitle>Filtros</FiltroTitle>
        <label class = "valor-minimo"> 
          <p>Valor Mínimo:</p>
          <input onChange={this.minInputHandle} value={this.state.minValueInput} type='number'></input>
        </label>
  
        <label class = "valor-maximo"> 
          <p>Valor Máximo:</p>
          <input onChange={this.maxInputHandle} value={this.state.maxValueInput} type='number'></input>
        </label>
  
        <label class = "valor-minimo"> 
          <p>Busca por nome:</p>
          <input onChange={this.nameInputHandle} value={this.state.nameInput} type='text'></input>
        </label>
        <button onClick={this.filter}>Filtrar</button>
        </Caixa>
      </MainContainer>
    );
  }
}