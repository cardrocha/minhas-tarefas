import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
  padding-bottom: 100px;
`

export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`
export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  font-weight: bold;
  color: #666;
  border-color: #666;
  width: 100%;
  border-radius: 8px;
`
export const Botao = styled.button`
  font-size: 12px;
  font-weight: bold;
  padding: 8px 12px;
  cursor: pointer;
  background-color: ${variaveis.azulEscuro}
  border-radius: 8px;
  margin-right: 8px;
  color: #fff;
  border: none;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
