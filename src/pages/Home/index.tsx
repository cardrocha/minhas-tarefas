import BotaoAdicionar from '../../components/BotaoAdicionar'
import Barraleteral from '../../containers/BarraLateral'
import ListaDeTarefas from '../../containers/listaDeTarefas'

const Home = () => (
  <>
    <Barraleteral />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
