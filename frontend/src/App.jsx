import MenuLateral from './componentes/MenuLateral/MenuLateral.jsx'
import Painel from './paginas/Painel/Painel.jsx'

function App() {
  return (
    <div className="aplicativo">
      {/* Pagina da esquerda */}
      <MenuLateral paginaAtual="painel" />

      {/* Pagina da direita */}
      <Painel />
    </div>
  )
}

export default App
