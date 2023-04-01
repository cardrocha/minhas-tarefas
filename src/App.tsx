import { Provider } from 'react-redux'
import Barraleteral from './containers/BarraLateral'
import ListaDeTarefas from './containers/listaDeTarefas'
import EstiloGlobal, { Container } from './styles'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Barraleteral />
        <ListaDeTarefas />
      </Container>
    </Provider>
  )
}

export default App
