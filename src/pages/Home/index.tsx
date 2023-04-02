import BotaoAdicionar from '../../components/BotaoAdicionar'
import Barraleteral from '../../containers/BarraLateral'
import ListaDeTarefas from '../../containers/listaDeTarefas'

const Home = () => (
  <>
    <Barraleteral mostraFiltros />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
